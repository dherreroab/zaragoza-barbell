import React, { useRef, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { ContactMailClient } from '../web-api-client.ts';
import ReCAPTCHA from "react-google-recaptcha";
import { useSnackbar } from 'notistack';

function ContactForm() {
    const recaptcha = useRef();
    const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function submitForm(event) {
        setLoading(true);
        event.preventDefault();
        const notifications = [];
        const captchaValue = recaptcha.current.getValue();

        if (!captchaValue)
            notifications.push({ "message": "Please verify the CAPTCHA!", "variant": "error" })

        if (!name)
            notifications.push({ "message": "Name is required!", "variant": "error" });

        if (!email)
            notifications.push({ "message": "Email is required!", "variant": "error" });

        if (!message)
            notifications.push({ "message": "Message is required!", "variant": "error" });

        if (notifications.length === 0) {
            try {
                const result = await sendContactMail(captchaValue);

                if (result && result > 0) {
                    notifications.push({ "message": "Success", "variant": "success" });
                } else {
                    notifications.push({ "message": "Failed", "variant": "error" });
                }
            } catch (error) {

                notifications.push({ "message": error, "variant": "error" });
                console.error(error);
            }

            recaptcha.current.reset();
            setName('');
            setEmail('');
            setMessage('');
        }

        setLoading(false);
        notifications.map((notification, index) => enqueueSnackbar(notification.message, { autoHideDuration: 3000, variant: notification.variant }));
    }

    async function sendContactMail(captchaValue) {
        let client = new ContactMailClient();
        console.log(name, email, message, captchaValue);
        return await client.sendContactMail(name, email, message, captchaValue);
    }

    return (
        <>

            <Form onSubmit={submitForm} className="form" style={{ opacity: loading ? 0.5 : 1 }}>
                <Form.Group className='form-group' controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} disabled={loading} />
                </Form.Group>
                <Form.Group className='form-group' controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={loading} />
                </Form.Group>
                <Form.Group className='form-group' controlId="formMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} disabled={loading} />
                </Form.Group>
                <Form.Group>
                    <ReCAPTCHA className='form-group' ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
                </Form.Group>
                <div>
                    <Button variant="primary" type="submit" style={{ marginTop: '1vh' }} disabled={loading}>Enviar</Button>
                    {loading && (
                        <Spinner animation="border" />
                    )}

                </div>
            </Form>
        </>
    );
}

export default ContactForm;