// Selecciona el modal y los elementos relacionados
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Agrega eventos a las imágenes del carrusel
const carouselImages = document.querySelectorAll('.carousel img');

carouselImages.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src; // Establece la imagen del modal
  });
});

// Cierra el modal al hacer clic en la 'X'
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cierra el modal al hacer clic fuera de la imagen
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
