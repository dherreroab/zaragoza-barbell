import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import './styles/CookiePolicy.css';

Modal.setAppElement('#root') // Reemplaza '#root' con el id de tu elemento raíz

function CookiePolicy() {
    const [cookies, setCookie] = useCookies(['cookiesAccepted']);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);


    useEffect(() => {
        if (cookies.cookiesAccepted !== true) {
            setModalIsOpen(true);
        }
    }, [cookies]);

    function acceptCookies() {
        setButtonClicked(true);
        setCookie('cookiesAccepted', 'true', { path: '/', maxAge: 86400 });
        closeModal();
    }

    function rejectCookies() {
        setButtonClicked(true);
        setCookie('cookiesAccepted', 'false', { path: '/', maxAge: 86400 });
        window.location.href = 'https://www.google.com';
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <Modal className="cookie-policy"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
                content: {
                    position: 'absolute',
                    top: 'auto',
                    left: '20px',
                    right: '20px',
                    bottom: '20px',
                    padding: '20px',
                    zIndex: '9999'
                }
            }}
        >
            <div className="cookiePolicyContent">
                <h2>Política de Cookies</h2>
                <p>Aquí va tu política de cookies...</p>

                <Button className='cookie-button' variant="outline-light" onClick={acceptCookies} disabled={buttonClicked}>Aceptar</Button>
                <Button className='cookie-button' variant="outline-danger" onClick={rejectCookies} disabled={buttonClicked}>Rechazar</Button>
            </div>
        </Modal>
    );
}


export default CookiePolicy;