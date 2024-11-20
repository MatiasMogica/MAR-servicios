const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
module.exports = app; // Exporta la app para Vercel

app.use(express.json());
app.use(cors());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// Ruta para recibir datos del formulario y enviar el email
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Configuración del correo electrónico
  const mailOptions = {
    from: 'MAR-servicios',             // Correo desde donde se enviará
    to: process.env.EMAIL,               // Correo de destino (puedes usar el mismo para pruebas)
    subject: `Nuevo mensaje de ${name}`,    // Asunto del correo
    text: `Has recibido un mensaje de ${name} (${email}):\n\n${message}`  // Contenido del mensaje
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ message: 'Error al enviar el mensaje' });
    } else {
      console.log('Correo enviado:', info.response);
      res.json({ message: 'Mensaje enviado correctamente' });
    }
  });
});

// Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

