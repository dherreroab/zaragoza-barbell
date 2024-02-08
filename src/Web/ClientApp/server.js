const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tuCorreo@gmail.com',
            pass: 'tuContraseña'
        }
    });

    let mailOptions = {
        from: email,
        to: 'info@zaragozabarbell.com',
        subject: `Mensaje de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Correo enviado');
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));