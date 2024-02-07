import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
        console.log(name, email, message);
    };

    return (
        <Form onSubmit={handleSubmit} className="form">
            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} value={message} onChange={e => setMessage(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '1vh' }}>Enviar</Button>
        </Form>
    );
}

export default ContactForm;