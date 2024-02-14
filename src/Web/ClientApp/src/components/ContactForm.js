import React, { useRef, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { ContactMailClient } from '../web-api-client.ts';
import ReCAPTCHA from "react-google-recaptcha";
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

function ContactForm() {
    const recaptcha = useRef();
    const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    async function submitForm(event) {
        function setNotification() {
            notifications.map((notification, index) => enqueueSnackbar(notification.message, { autoHideDuration: 3000, variant: notification.variant }));
        };

        setLoading(true);
        event.preventDefault();
        const notifications = [];
        const captchaValue = recaptcha.current.getValue();


        if (!name)
            notifications.push({ "message": t('contact.form.validation.name'), "variant": "error" });

        if (!email)
            notifications.push({ "message": t('contact.form.validation.email'), "variant": "error" });

        if (!message)
            notifications.push({ "message": t('contact.form.validation.message'), "variant": "error" });

        if (!captchaValue)
            notifications.push({ "message": t('contact.form.validation.captcha'), "variant": "error" })

        if (notifications.length === 0) {
            sendContactMail(captchaValue)
                .then(response => {
                    if (response && response > 0) {
                        notifications.push({ "message": t('contact.form.validation.success'), "variant": "success" });
                    } else {
                        notifications.push({ "message": t('contact.form.validation.error'), "variant": "error" });
                    }
                })
                .catch(error => {
                    notifications.push({ "message": t('contact.form.validation.success'), "variant": "success" });
                })
                .finally(() => {
                    recaptcha.current.reset();
                    setName('');
                    setEmail('');
                    setMessage('');

                    setLoading(false);
                    setNotification();
                });
        }

        setNotification();
    }

    async function sendContactMail(captchaValue) {
        let client = new ContactMailClient();
        return client.sendContactMail(name, email, message, captchaValue);
    }

    return (
        <>

            <Form onSubmit={submitForm} className="form" style={{ opacity: loading ? 0.5 : 1 }}>
                <Form.Group className='form-group' controlId="formName">
                    <Form.Label>{t('contact.form.name')}</Form.Label>
                    <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} disabled={loading} />
                </Form.Group>
                <Form.Group className='form-group' controlId="formEmail">
                    <Form.Label>{t('contact.form.email')}</Form.Label>
                    <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={loading} />
                </Form.Group>
                <Form.Group className='form-group' controlId="formMessage">
                    <Form.Label>{t('contact.form.message')}</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} disabled={loading} />
                </Form.Group>
                <Form.Group>
                    <ReCAPTCHA className='form-group' ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
                </Form.Group>
                <div>
                    <Button variant="primary" type="submit" style={{ marginTop: '1vh' }} disabled={loading}>{t('contact.form.submit')}</Button>
                    {loading && (
                        <Spinner animation="border" />
                    )}

                </div>
            </Form>
        </>
    );
}

export default ContactForm;