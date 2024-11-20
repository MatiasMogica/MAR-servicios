const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');
  const prevButton = carousel.querySelector('.carousel-button.prev');
  const nextButton = carousel.querySelector('.carousel-button.next');
  const totalImages = images.length;

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100; // Desplaza el carrusel basado en el índice
    track.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Mueve al siguiente índice
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Mueve al anterior índice
    updateCarousel();
  });
});

  