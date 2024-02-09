import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ContactMailClient } from '../web-api-client.ts';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };
    }

    async sendContactMail() {
        let client = new ContactMailClient();
        console.log(this.state.name, this.state.email, this.state.message);
        // await client.sendContactMail(this.state.name, this.state.email, this.state.message);
    }

    render() {
        const handleSubmit = (event) => {
            event.preventDefault();
            this.sendContactMail();
        };
        return (
            <Form onSubmit={handleSubmit} className="form">
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginTop: '1vh' }}>Enviar</Button>
            </Form>
        );
    }
}