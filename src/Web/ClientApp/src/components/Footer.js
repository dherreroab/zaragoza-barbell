import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Mailto from "./Mailto";
import "./styles/Footer.css";
import logo from './../assets/img/logo-black-red.png';
import { withTranslation } from 'react-i18next';

class Footer extends Component {
    render() {
        const { t } = this.props;

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
                                {t('footer.location')}
                            </a>
                        </div>
                        <div className="links">
                            <div>
                                <Link to="/legal-notice">{t('footer.links.legal')}</Link>
                            </div>
                            <div>
                                <Link to="/privacy-policy">{t('footer.links.privacy')}</Link>
                            </div>
                            <div>
                                <Link to="/cookies-policy">{t('footer.links.cookie')}</Link>
                            </div>
                            <div>
                                <Link to="/faqs">{t('footer.links.faq')}</Link>
                            </div>
                        </div>
                        <p className="copyright">© {new Date().getFullYear()} Zaragoza Barbell, S.L {t('footer.copy')}</p>
                    </div>
                    <div className="logo-footer">
                        <div className="social">
                            <a href="whatsapp://send?phone=+346123456789" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/zgzpowerbarbell/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC9bU1g8Qp6x1C4Y7lXZsV8w" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withTranslation()(Footer);