import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import "./styles/Contact.css";
import zgzb2 from '../assets/img/zgzb2.jpg';

const mapStyles = {
    height: "50vh",
    width: "40vh"
};

const defaultCenter = {
    lat: 41.645827, lng: -0.805660
}

const LocationMap = (props => (
    <div className='map-section'>
        <LoadScript
            googleMapsApiKey='AIzaSyDXz7j3N_z6iIDwrdGXJPQo9cCisW2epsI'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                <Marker position={defaultCenter}
                    icon={{
                        url: { zgzb2 },
                    }}
                />
            </GoogleMap>
        </LoadScript>
    </div>
));

const Contact = () => (
    <div id='contact' className='contact-section'>
        <div className='contact-text'>
            <h2>Contacto</h2>
            <p className="text-center">¿Te quieres poner en contacto con nosotros? Aquí tienes varias opciones, o jugartela a que te cojamos el teléfono o rellenar el formulario de contacto y te responde con la mayor brevedad posible.</p>
        </div>
        <Row xs={1} md={2}>
            <Col className="d-flex justify-content-center form-section">
                <ContactForm />
            </Col>
            <Col className="d-flex justify-content-center">
                <LocationMap />
            </Col>
        </Row>
    </div>
);

export default Contact;