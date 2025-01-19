const mainLinks = document.querySelectorAll('.main-link');

mainLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Cierra todos los submenús al hacer clic en un nuevo botón principal
        document.querySelectorAll('.submenu').forEach(submenu => {
            if (submenu !== link.nextElementSibling) {
                submenu.style.display = 'none';
            }
        });

        // Alterna la visibilidad del submenú correspondiente
        const submenu = link.nextElementSibling;
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });

    // Doble clic para cerrar el submenú
    link.addEventListener('dblclick', () => {
        const submenu = link.nextElementSibling;
        submenu.style.display = 'none';
    });
  });