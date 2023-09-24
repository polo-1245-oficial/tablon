    // Obtener elementos del DOM
    const botonMostrarModal = document.getElementById('mostrarModal');
    const modal = document.getElementById('miModal');
    const botonCerrarModal = document.getElementById('cerrarModal');

    // Mostrar el modal al hacer clic en el botón
    botonMostrarModal.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Ocultar el modal al hacer clic en el botón de cierre
    botonCerrarModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    