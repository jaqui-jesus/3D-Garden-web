// Selecciona el formulario por su ID y añade un evento 'submit' para manejar el envío del formulario.
document.getElementById('formularioMaceta').addEventListener('submit', function(event) {
    // Previene el comportamiento por defecto del formulario (evita que se recargue la página).
    event.preventDefault();

    // Obtiene los valores de los campos del formulario.
    const diseñoMaceta = document.getElementById('diseñoMaceta').value;
    const altura = document.getElementById('altura').value;
    const ancho = document.getElementById('ancho').value;
    const profundidad = document.getElementById('profundidad').value;
    const fechaEntrega = document.getElementById('fechaEntrega').value;

    // Verifica si alguno de los campos está vacío.
    if (!diseñoMaceta || !altura || !ancho || !profundidad || !fechaEntrega || !imagenMaceta) {
        // Muestra una alerta si algún campo no está completado.
        alert('Por favor, complete todos los campos.');
    } else {
        // Muestra una alerta indicando que el pedido se ha registrado correctamente.
        alert('Su pedido se ha registrado correctamente.');

        // Limpia todos los campos del formulario.
        document.getElementById('formularioMaceta').reset();
    }
});

// Selecciona el campo de fecha de entrega por su ID y añade un evento 'input' para validar la fecha seleccionada.
document.getElementById('fechaEntrega').addEventListener('input', function() {
    // Obtiene la fecha actual en formato YYYY-MM-DD.
    const today = new Date().toISOString().split('T')[0];

    // Verifica si la fecha seleccionada es igual o anterior a la fecha actual.
    if (this.value <= today) {
        // Muestra una alerta si la fecha seleccionada no es válida.
        alert('La fecha de entrega debe ser posterior al día actal.');
        // Limpia el campo de fecha.
        this.value = '';
    }
});

// Selecciona el campo de carga de imagen y el botón de borrar.
const imagenMaceta = document.getElementById('imagenMaceta');
const botonBorrarImagen = document.getElementById('borrarImagen');

// Añade un evento 'change' al campo de carga de imagen.
imagenMaceta.addEventListener('change', function() {
    // Si se selecciona un archivo, muestra el botón de borrar.
    if (this.files.length > 0) {
        botonBorrarImagen.style.display = 'block';
    } else {
        botonBorrarImagen.style.display = 'none';
    }
});

// Añade un evento 'click' al botón de borrar.
botonBorrarImagen.addEventListener('click', function() {
    // Limpia el campo de carga de imagen.
    imagenMaceta.value = '';
    // Oculta el botón de borrar.
    botonBorrarImagen.style.display = 'none';
    // Muestra un mensaje de confirmación.
    alert('La imagen ha sido eliminada.');
});