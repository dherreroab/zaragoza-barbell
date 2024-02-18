import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from './ContactForm';
import "./styles/Contact.css";
import { SnackbarProvider } from 'notistack';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <div id='contact' className='contact-section'>
            <div className='contact-header'>
                <h1>{t('contact.header')}</h1>
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