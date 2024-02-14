import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from './ContactForm';
import { LocationMap } from './LocationMap';
import "./styles/Contact.css";
import { SnackbarProvider } from 'notistack';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <div id='contact' className='contact-section'>
            <div className='contact-header'>
                <h2>{t('contact.header')}</h2>
                <p className="text-center">{t('contact.sub-header')}</p>
            </div>
            <div className='justify-content-center form-section'>
                <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
                    <ContactForm />
                </SnackbarProvider>
            </div>
        </div>
    );
};

export default Contact;