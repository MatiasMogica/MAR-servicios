// Función para manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Evita el envío del formulario para validar antes
  
  // Obtener valores de los campos
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Expresión regular para validar el formato de correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Validación de los campos
  if (name === '') {
    Swal.fire('Error', 'Por favor, ingresa tu nombre.', 'error');
    return;
  }
  
  if (email === '') {
    Swal.fire('Error', 'Por favor, ingresa tu correo electrónico.', 'error');
    return;
  }
  
  if (!emailPattern.test(email)) {
    Swal.fire('Error', 'Por favor, ingresa un correo electrónico válido.', 'error');
    return;
  }
  
  if (message === '') {
    Swal.fire('Error', 'Por favor, ingresa un mensaje.', 'error');
    return;
  }
  
  // Si todas las validaciones pasan, preparar el envío
  try {
    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      Swal.fire({
        title: 'Mensaje enviado',
        text: 'Gracias por contactarnos. Nos comunicaremos contigo pronto.',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      });
      // Restablecer el formulario
      document.getElementById('contactForm').reset();
    } else {
      throw new Error('Hubo un problema al enviar el formulario.');
    }
  } catch (error) {
    Swal.fire('Error', 'No se pudo enviar el formulario. Inténtalo más tarde.', 'error');
  }
});



  
  