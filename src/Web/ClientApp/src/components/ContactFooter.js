import React, { Component } from "react";
import Mailto from "./Mailto";
import "./styles/ContactFooter.css";
import logo from './../assets/img/logo-black-red.png';

class ContactFooter extends Component {
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
                                <i className="bi bi-envelope-arrow-up"></i>
                                {email.emailDestination}
                            </Mailto>
                        </div>
                        <div className="address" onClick={() => window.open('https://maps.app.goo.gl/4eCsKRbXwHhSRqKr7', '_blank')}>

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
                            <a href="/cookies-policy">Política de cookies</a>
                            <a href="/accessibility-statement">Declaración de accesibilidad</a>
                        </div>
                        <p className="copyright">© {new Date().getFullYear()} Zaragoza Barbell, S.L Todos los derechos reservados</p>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default ContactFooter;