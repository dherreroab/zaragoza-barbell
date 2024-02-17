import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LegalNotice = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='policy'>
            <div>
                <Link to="/">Volver a la Home</Link>
            </div>
            <div className='policy-text'>
                <h1>Política de Privacidad</h1>
                <div>
                    <h5>Identificación y Titularidad</h5>
                    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, el Titular expone sus datos identificativos.</p>
                    <ul>
                        <li><strong>Titular:</strong> ZARAGOZA BARBELL SL.</li>
                        <li><strong>Correo electrónico:</strong> info@zaragozabarbell.com</li>
                        <li><strong>Sitio Web:</strong> <a href="http://zaragozabarbell.com/">http://zaragozabarbell.com</a></li>
                    </ul>
                    <h5>Finalidad</h5>
                    <p>La finalidad del sitio Web <a href="http://zaragozabarbell.com/">http://zaragozabarbell.com</a> es Servicios de Marketing y Logística.</p>
                    <h5>Condiciones de Uso</h5>
                    <p>La utilización del sitio Web te otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de uso incluidas en las páginas:</p>
                    <ul>
                        <li><a href="http://zaragozabarbell.com/?page_id=76">Aviso Legal</a></li>
                        <li><a href="http://zaragozabarbell.com/?page_id=3">Política de Privacidad</a></li>
                        <li><a href="http://zaragozabarbell.com/?page_id=77">Política de Cookies</a></li>
                    </ul>
                    <p>Si no estás conforme con todas y cada una de estas cláusulas y condiciones te abstendrás de utilizar este sitio Web.</p>
                    <p>El acceso a este sitio Web no supone, en modo alguno, el inicio de una relación comercial con ZARAGOZA BARBELL SL.</p>
                    <p>A través de este sitio Web, el Titular te facilita el acceso y la utilización de diversos contenidos que el Titular o sus colaboradores han publicadon por medio de Internet.</p>
                    <p>A tal efecto, te obligas y comprometes a NO utilizar cualquiera de los contenidos del sitio Web con fines o efectos ilícitos, prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por ZARAGOZA BARBELL SL, de otros usuarios o de cualquier usuario de Internet.</p>
                    <h5>Medidas de seguridad</h5>
                    <p>Los datos personales que facilites al Titular pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva a ZARAGOZA BARBELL SL, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.</p>
                    <p>No obstante, debes ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y que, por tanto el Titular no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos aunque el Titular pone todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos dañinos.</p>
                    <h5>Datos personales</h5>
                    <p>Puedes consultar toda la información relativa al tratamiento de datos personales que recoge el Titular en la página de <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Politica de Privacidad</Link>.</p>
                    <h5>Contenidos</h5>
                    <p>El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el sitio Web de fuentes que considera fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada. ZARAGOZA BARBELL SL declina expresamente cualquier responsabilidad por error u omisión en la información contenida en las páginas de este sitio Web.</p>
                    <p>Queda prohibido transmitir o enviar a través del sitio Web cualquier contenido ilegal o ilícito, virus informáticos, o mensajes que, en general, afecten o violen derechos de el Titular o de terceros.</p>
                    <p>Los contenidos de <a href="http://zaragozabarbell.com/">http://zaragozabarbell.com</a> tienen únicamente una finalidad informativa y bajo ninguna circunstancia deben usarse ni considerarse como oferta de venta, solicitud de una oferta de compra ni recomendación para realizar cualquier otra operación, salvo que así se indique expresamente.</p>
                    <p>ZARAGOZA BARBELL SL se reserva el derecho a modificar, suspender, cancelar o restringir el contenido de <a href="http://zaragozabarbell.com/">http://zaragozabarbell.com</a>, los vínculos o la información obtenida a través del sitio Web, sin necesidad de previo aviso.</p>
                    <p>ZARAGOZA BARBELL SL no es responsable de los daños y perjuicios que pudieran derivarse de la utilización de la información del sitio Web.</p>
                    <h5>Política de cookies</h5>
                    <p>En la página <Link to="/cookies-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Politica de Cookies</Link> puedes consultar toda la información relativa a la política de recogida y tratamiento de las cookies.</p>
                    <h5>Enlaces a otros sitios Web</h5>
                    <p>El Titular puede proporcionarte acceso a sitios Web de terceros mediante enlaces con la finalidad exclusiva de informarte sobre la existencia de otras fuentes de información en Internet en las que podrás ampliar los datos ofrecidos en el sitio Web.</p>
                    <p>Estos enlaces a otros sitios Web no suponen en ningún caso una sugerencia o recomendación para que visites las páginas web de destino, que están fuera del control del Titular, por lo que ZARAGOZA BARBELL SL no es responsable del contenido de los sitios web vinculados ni del resultado que obtengas al seguir los enlaces.</p>
                    <p>Asimismo, ZARAGOZA BARBELL SL no responde de los links o enlaces ubicados en los sitios web vinculados a los que te proporciona acceso.</p>
                    <p>El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre ZARAGOZA BARBELL SL y el propietario del sitio en el que se establezca el enlace, ni la aceptación o aprobación por parte del Titular de sus contenidos o servicios.</p>
                    <p>Si accedes a un sitio Web externo desde un enlace que encuentres en <a href="http://zaragozabarbell.com/">http://zaragozabarbell.com</a> deberás leer la propia política de privacidad del otro sitio web que puede ser diferente de la de este sitio Web.</p>
                    <h5>Propiedad intelectual e industrial</h5>
                    <p>Todos los derechos están reservados.</p>
                    <p>Todo acceso a este sitio Web está sujeto a las siguientes condiciones: la reproducción, almacenaje permanente y la difusión de los contenidos o cualquier otro uso que tenga finalidad pública o comercial queda expresamente prohibida sin el consentimiento previo expreso y por escrito de ZARAGOZA BARBELL SL.</p>
                    <h5>Limitación de responsabilidad</h5>
                    <p>La información y servicios incluidos o disponibles a través de este sitio Web pueden incluir incorrecciones o errores tipográficos. De forma periódica el Titular incorpora mejoras y/o cambios a la información contenida y/o los Servicios que puede introducir en cualquier momento.</p>
                    <p>El Titular no declara ni garantiza que los servicios o contenidos sean interrumpidos o que estén libres de errores, que los defectos sean corregidos, o que el servicio o el servidor que lo pone a disposición estén libres de virus u otros componentes nocivos sin perjuicio de que el Titular realiza todos los esfuerzos en evitar este tipo de incidentes.</p>
                    <p>ZARAGOZA BARBELL SL declina cualquier responsabilidad en caso de que existan interrupciones o un mal funcionamiento de los Servicios o contenidos ofrecidos en Internet, cualquiera que sea su causa. Asimismo, el Titular no se hace responsable por caídas de la red, pérdidas de negocio a consecuencia de dichas caídas, suspensiones temporales de fluido eléctrico o cualquier otro tipo de daño indirecto que te pueda ser causado por causas ajenas a el Titular.</p>
                    <p>Antes de tomar decisiones y/o acciones con base a la información incluida en el sitio Web, el Titular te recomienda comprobar y contrastar la información recibida con otras fuentes.</p>
                    <h5>Jurisdicción</h5>
                    <p>Este Aviso Legal se rige íntegramente por la legislación española.</p>
                    <p>Siempre que no haya una norma que obligue a otra cosa, para cuantas cuestiones se susciten sobre la interpretación, aplicación y cumplimiento de este Aviso Legal, así como de las reclamaciones que puedan derivarse de su uso, las partes acuerdan someterse a los Jueces y Tribunales de la provincia de Madrid, con renuncia expresa de cualquier otra jurisdicción que pudiera corresponderles.</p>
                    <h5>Contacto</h5>
                    <p>En caso de que tengas cualquier duda acerca de estas Condiciones legales o quieras realizar cualquier comentario sobre este sitio Web, puedes enviar un mensaje de correo electrónico a la dirección info@zaragozabarbell.com.</p>
                </div>
            </div>
        </div>
    );

}

export default LegalNotice;