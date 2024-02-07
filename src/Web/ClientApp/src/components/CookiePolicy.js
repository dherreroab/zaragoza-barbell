import React from 'react';
import './styles/CookiesPolicy.css';
import { Link } from 'react-router-dom';

class CookiePolicy extends React.Component {
    render() {

        return (
            <div className='cookies-policy'>
                <div>
                    <Link to="/">Volver a la Home</Link>
                </div>
                <div className='cookies-policy-text'>
                    <h1>Política de Cookies</h1>
                    <p>ZARAGOZA BARBELL SL, a través del presente documento, recoge su Política de recogida y tratamiento de cookies, en cumplimiento de lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE).</p>
                    <p>Las cookies se almacenan en el equipo terminal del usuario (ordenador o dispositivo móvil) y recopilan información al visitar la página web REiCOP.org, con la finalidad de mejorar la usabilidad de las mismas, conocer los hábitos o necesidades de navegación de los usuarios para poder adaptarse a los mismos, así como obtener información con fines estadísticos. En el caso de aquellos usuarios que ya sean clientes de la entidad, la información recabada con las cookies servirá también para su identificación al acceder a las distintas herramientas que la entidad pone a su disposición para la gestión de los servicios.</p>
                    <p>La presente Política de Cookies será de aplicación a aquellos usuarios que voluntariamente visitan la página web de la entidad, cumplimentan formularios de recogida de datos, acceden a las herramientas que la entidad pone a disposición de sus clientes para gestionar sus servicios, o utilizan cualquier otro servicio presente en el sitio web que implique la comunicación de datos a la entidad, o el acceso a datos por la entidad, para la prestación de sus servicios.</p>
                    <p>La entidad informa a los usuarios de su página web, de la existencia de cookies y pone a su disposición la presente Política con la finalidad de informarles acerca del uso y del objeto de las mismas. El hecho de continuar la navegación a través de sus páginas, supone el conocimiento y la aceptación de la presente Política por parte de dichos usuarios. </p>
                    <p>ZARAGOZA BARBELL SL utiliza los siguientes tipos de cookies:</p>
                    <p>Clasificadas por su titularidad:</p>
                    <ul>
                        <li>Cookies propias: enviadas y gestionadas directamente por la entidad.</li>
                        <li>Cookies de terceros: enviadas y gestionadas por un tercero ajeno a la entidad, de forma anónima, con la finalidad de realizar estudios estadísticos de navegación por las páginas web de la entidad.</li>
                    </ul>
                    <p>Clasificadas por su finalidad:</p>
                    <ul>
                        <li>Cookies técnicas y/o de personalización: facilitan la navegación, al identificar la sesión, permitir el acceso a herramientas de acceso restringido, además de configurar a medida las opciones disponibles. Posibilitan la prestación del servicio solicitado previamente por el usuario.</li>
                        <li>Cookies de análisis y/o publicidad: permiten conocer el número de visitas recibidas en las diferentes secciones de la página web, los hábitos y tendencias de sus usuarios y, en consecuencia, poder mejorar la navegación y el servicio ofrecido por la entidad (fundamentalmente, Google Analytics). Recopila datos de forma anónima con la finalidad de obtener perfiles de navegación de los usuarios.</li>
                    </ul>
                    <p>Clasificadas por su duración:</p>
                    <ul>
                        <li>Cookies de sesión: recaban y almacenan los datos mientras el usuario accede a la página web.</li>
                        <li>Cookies persistentes: recaban y almacenan los datos en el terminal del usuario durante un periodo de tiempo variable en función de cuál sea la finalidad para la que han sido utilizadas.</li>
                        <li>El tiempo de conservación de las cookies dependerá del tipo de que se trate y siempre será el mínimo indispensable para cumplir su finalidad.</li>
                    </ul>
                    <p>En cualquier caso, los usuarios pueden configurar su navegador, de manera que se deshabilite o bloquee la recepción de todas o algunas de las cookies. El hecho de no desear recibir estas cookies, no constituye un impedimento para poder acceder a la información del sitio web/aplicación de la entidad, aunque el uso de algunos servicios podrá ser limitado. Si una vez otorgado el consentimiento para la recepción de cookies, se desease retirar este, se deberán eliminar aquellas almacenadas en el equipo del usuario, a través de las opciones de los diferentes navegadores. </p>
                    <p>A continuación, tiene disponibles los enlaces con la información para gestionar las cookies de los navegadores más utilizados: </p>
                    <ul>
                        <li><a href="http://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies" aria-label="Firefox">Firefox</a></li>
                        <li><a href="http://support.google.com/chrome/bin/answer.py?hl=es&amp;answer=95647" aria-label="Chrome">Chrome</a></li>
                        <li><a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer" aria-label="Internet Explorer">Internet Explorer</a></li>
                        <li><a href="https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy" aria-label="Microsoft Edge">Microsoft Edge</a></li>
                        <li><a href="http://support.apple.com/kb/ph5042" aria-label="Safari">Safari</a></li>
                        <li><a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" aria-label="Opera">Opera</a></li>
                    </ul>
                    <p>Otros navegadores: consulte la documentación del navegador que tenga instalado. Complemento de inhabilitación para navegadores de Google Analytics</p>
                    <p>Sí, desea rechazar las cookies analíticas de Google Analytics en todos los navegadores, de forma que no se envíe información suya a Google Analitys, puede descargar un complemento que realiza esta función desde este enlace: https://tools.google.com/dlpage/gaoptout.</p>
                </div>
            </div>
        );
    }
}

export default CookiePolicy;