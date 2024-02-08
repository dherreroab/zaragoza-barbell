@description('The location into which your Azure resources should be deployed.')
param location string = resourceGroup().location

@description('Select the type of environment you want to provision. Allowed values are Production, Staging, and Development.')
@allowed([
  'Production'
  'Staging'
  'Development'
])
param environmentName string

@description('A unique suffix to add to resource names that need to be globally unique.')
@maxLength(13)
param resourceNameSuffix string = uniqueString(resourceGroup().id)

@description('The name of the project.')
param projectName string

// Define the environment configuration map.
var environmentConfigurationMap = {
  Production: {
    environmentAbbreviation: 'prd'
    appServicePlan: {
      sku: {
        name: 'S1'
        capacity: 1
      }
    }
  }
  Staging: {
    environmentAbbreviation: 'stg'
    appServicePlan: {
      sku: {
        name: 'B1'
      }
    }
  }
  Development: {
    environmentAbbreviation: 'dev'
    appServicePlan: {
      sku: {
        name: 'B1'
      }
    }
  }
}

// Define the names for resources.
var environmentAbbreviation = environmentConfigurationMap[environmentName].environmentAbbreviation
var keyVaultName = 'kv-${projectName}-${environmentAbbreviation}'
var appServiceAppName = 'as-${projectName}-${resourceNameSuffix}-${environmentAbbreviation}'
var appServicePlanName = 'plan-${projectName}-${environmentAbbreviation}'
var logAnalyticsWorkspaceName = 'log-${projectName}-${environmentAbbreviation}'
var applicationInsightsName = 'appi-${projectName}-${environmentAbbreviation}'

// Define the SKUs for each component based on the environment type.
var appServicePlanSku = environmentConfigurationMap[environmentName].appServicePlan.sku

resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2020-10-01' = {
  name: logAnalyticsWorkspaceName
  location: location
  properties: {
    sku: {
      name: 'PerGB2018'
    }
  }
}

resource keyVault 'Microsoft.KeyVault/vaults@2019-09-01' = {
  name: keyVaultName
  location: location
  properties: {
    enabledForTemplateDeployment: true
    tenantId: subscription().tenantId
    accessPolicies: []
    sku: {
      name: 'standard'
      family: 'A'
    }
  }
}

resource keyVault_DiagnosticSettings 'Microsoft.Insights/diagnosticSettings@2021-05-01-preview' = {
  scope: keyVault
  name: 'keyVaultDiagnosticSettings'
  properties: {
    workspaceId: logAnalyticsWorkspace.id
    logs: [
      {
        category: 'AuditEvent'
        enabled: true
      }
    ]
    metrics: [
      {
        category: 'AllMetrics'
        enabled: true
      }
    ]
  }
}

resource appServicePlan 'Microsoft.Web/serverfarms@2021-01-15' = {
  name: appServicePlanName
  location: location
  sku: appServicePlanSku
}

resource appServicePlan_DiagnosticSettings 'Microsoft.Insights/diagnosticSettings@2021-05-01-preview' = {
  scope: appServicePlan
  name: 'appServicePlanDiagnosticSettings'
  properties: {
    workspaceId: logAnalyticsWorkspace.id
    metrics: [
      {
        category: 'AllMetrics'
        enabled: true
      }
    ]
  }
}

resource appServiceApp 'Microsoft.Web/sites@2021-01-15' = {
  name: appServiceAppName
  location: location
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      healthCheckPath: '/health'
      netFrameworkVersion: 'v7.0'
      appSettings: [
        {
          name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
          value: applicationInsights.properties.ConnectionString
        }
        {
          name: 'KeyVaultUri'
          value: keyVault.properties.vaultUri
        }
      ]
    }
  }
}

resource appServiceApp_DiagnosticSettings 'Microsoft.Insights/diagnosticSettings@2021-05-01-preview' = {
  scope: appServiceApp
  name: 'appServiceAppDiagnosticSettings'
  properties: {
    workspaceId: logAnalyticsWorkspace.id
    logs: [
      {
        category: 'AppServiceHTTPLogs'
        enabled: true
      }
      {
        category: 'AppServiceConsoleLogs'
        enabled: true
      }
      {
        category: 'AppServiceAppLogs'
        enabled: true
      }
      {
        category: 'AppServiceAuditLogs'
        enabled: true
      }
      {
        category: 'AppServiceIPSecAuditLogs'
        enabled: true
      }
      {
        category: 'AppServicePlatformLogs'
        enabled: true
      }
    ]
    metrics: [
      {
        category: 'AllMetrics'
        enabled: true
      }
    ]
  }
}

resource keyVault_AccessPolicy 'Microsoft.KeyVault/vaults/accessPolicies@2022-07-01' = {
  parent: keyVault
  name: 'add'
  properties: {
    accessPolicies: [
      {
        tenantId: appServiceApp.identity.tenantId
        objectId: appServiceApp.identity.principalId
        permissions: {
          keys: [
            'Get'
          ]
          secrets: [
            'Get'
            'List'

          ]
          certificates: [
            'Get'
            'List'
          ]
        }
      }
    ]
  }
}

resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: applicationInsightsName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
  }
}

output appServiceAppName string = appServiceApp.name
output appServiceAppHostName string = appServiceApp.properties.defaultHostName
