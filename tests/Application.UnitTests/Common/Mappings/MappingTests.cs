﻿using System.Reflection;
using System.Runtime.Serialization;
using AutoMapper;
using ZaragozaBarbell.Application.Common.Interfaces;
using ZaragozaBarbell.Application.Common.Models;
using ZaragozaBarbell.Domain.Entities;
using NUnit.Framework;

namespace ZaragozaBarbell.Application.UnitTests.Common.Mappings;

public class MappingTests
{
    private readonly IConfigurationProvider _configuration;
    private readonly IMapper _mapper;

    public MappingTests()
    {
        _configuration = new MapperConfiguration(config =>
            config.AddMaps(Assembly.GetAssembly(typeof(IApplicationDbContext))));

        _mapper = _configuration.CreateMapper();
    }

    [Test]
    public void ShouldHaveValidConfiguration()
    {
        _configuration.AssertConfigurationIsValid();
    }

    private object GetInstanceOf(Type type)
    {
        if (type.GetConstructor(Type.EmptyTypes) != null)
            return Activator.CreateInstance(type)!;

        // Type without parameterless constructor
        // TODO: Figure out an alternative approach to the now obsolete `FormatterServices.GetUninitializedObject` method.
#pragma warning disable SYSLIB0050 // Type or member is obsolete
        return FormatterServices.GetUninitializedObject(type);
#pragma warning restore SYSLIB0050 // Type or member is obsolete
    }
}
