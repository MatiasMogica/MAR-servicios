// Selecciona el contenedor donde se cargará el modal
const modalContainer = document.getElementById('modal-container');

// Función para inicializar eventos del modal
const initializeModal = () => {
  const btnQuote = document.getElementById('btnQuote');
  const contactOptions = document.getElementById('contactOptions');
  const closeModal = document.getElementById('closeModal');

  // Verifica si los elementos existen antes de asignar eventos
  if (btnQuote && contactOptions && closeModal) {
    btnQuote.addEventListener('click', () => {
      contactOptions.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
      contactOptions.style.display = 'none';
    });

    contactOptions.addEventListener('click', (e) => {
      if (e.target === contactOptions) {
        contactOptions.style.display = 'none';
      }
    });
  } else {
    console.error('No se pudieron inicializar los eventos del modal.');
  }
};

// Carga el archivo modal.html
fetch('modal.html')
  .then(response => response.text())
  .then(html => {
    modalContainer.innerHTML = html; // Inserta el HTML en el DOM
    initializeModal(); // Inicializa los eventos del modal
  })
  .catch(error => console.error('Error al cargar el modal:', error));


