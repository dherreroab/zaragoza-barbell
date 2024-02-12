import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from './ContactForm';
import { LocationMap } from './LocationMap';
import "./styles/Contact.css";
import { SnackbarProvider } from 'notistack';

const Contact = () => (
    <div id='contact' className='contact-section'>
        <div className='contact-header'>
            <h2>Contacto</h2>
            <p className="text-center">¿Te quieres poner en contacto con nosotros? Aquí tienes varias opciones, o jugartela a que te cojamos el teléfono o rellenar el formulario de contacto y te responde con la mayor brevedad posible.</p>
        </div>
        <Row xs={1} md={2}>
            <Col className="d-flex justify-content-center form-section">
                <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
                    <ContactForm />
                </SnackbarProvider>
            </Col>
            <Col className="d-flex justify-content-center">
                <LocationMap />
            </Col>
        </Row>
    </div>
);

export default Contact;