import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Mailto from "./Mailto";
import "./styles/Footer.css";
import logo from './../assets/img/logo-black-red.png';

class Footer extends Component {
    render() {

        const email = {
            emailDestination: "zaragozabarbell@gmail.com",
            emailSubject: "Hablemos sobre el club",
            messageBody: "Hola! ¿Podemos hablar sobre el club?"
        };

        return (
            <footer className="section-separation footer">
                <div className="footer-container">
                    <div className="text">
                        <div className="email">
                            <Mailto
                                email={email.emailDestination}
                                subject={email.emailSubject}
                                body={email.messageBody}
                                className="mailto"
                            >
                                <i className="bi bi-envelope-fill"></i>
                                {email.emailDestination}
                            </Mailto>
                            <a href="tel:1234567890">
                                <i className="bi bi-telephone-fill"></i>
                                +34 123 456 789
                            </a>
                        </div>
                        <div className="address">

                            <a
                                href={`https://maps.app.goo.gl/4eCsKRbXwHhSRqKr7`}
                                target="_"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-geo-alt"></i>
                                Calle Brazal Almontilla 3 50410, Cuarte De Huerva (Zaragoza). España
                            </a>
                        </div>
                        <div className="links">
                            <a href="/legal-notice">Aviso legal</a>
                            <a href="/privacy">Política de privacidad</a>
                            <Link to="/cookies-policy">Política de cookies</Link>
                            <a href="/accessibility-statement">Declaración de accesibilidad</a>
                            <a href="/faqs">FAQs</a>
                        </div>
                        <p className="copyright">© {new Date().getFullYear()} Zaragoza Barbell, S.L Todos los derechos reservados</p>
                    </div>
                    <div className="logo-footer">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="social">
                            <div>
                                <a href="whatsapp://send?phone=+346123456789" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/zgzpowerbarbell/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>

                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UC9bU1g8Qp6x1C4Y7lXZsV8w" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;