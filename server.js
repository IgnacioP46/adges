const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/send', (req, res) => {
    const { nombre, apellidos, correo, telefono, calle, asunto, consulta } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'adges.admf@gmail.com', 
            pass: 'dqrq qpnc lyya rwzo', 
        },
    });

    const mailOptions = {
        from: correo,
        to: 'adges.admf@gmail.com',
        subject: asunto,
        text: `Nombre: ${nombre}\nApellidos: ${apellidos}\nCorreo: ${correo}\nTeléfono: ${telefono}\nCalle y Número: ${calle}\nConsulta: ${consulta}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo.');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Formulario enviado con éxito.');
        }
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
