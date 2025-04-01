
window.onload = function() {
    // Desplaza la página al centro vertical
    window.scrollTo({
        top: document.body.scrollHeight / 2 - window.innerHeight / 2,
        behavior: 'auto' // 'smooth' para un efecto suave
    });
    
    // O si prefieres centrar un elemento específico:
    // const element = document.getElementById('tu-elemento');
    // element.scrollIntoView({behavior: 'auto', block: 'center'});
};

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    const correo = formulario.querySelector('input[placeholder="Ingresa tu correo electrónico"]');
    const contraseña = formulario.querySelector('input[placeholder="Ingresa tu contraseña"]');

    // Focar automáticamente en el primer campo de texto
    document.querySelector('input[type="text"]').focus();
    
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        
        let esValido = true;
        
      // Validación de campos vacíos
        [correo, contraseña].forEach(input => {
            if (!input.value.trim()) {
                mostrarError(input, "Este campo es obligatorio", "danger");
                esValido = false;
            } else {
                limpiarError(input);
            }
        });
        
      // Validación de correo electrónico
        if (!validarCorreo(correo.value)) {
            mostrarError(correo, "Correo electrónico inválido", "danger");
            esValido = false;
        }
        
        if (esValido) {
        // Simulación de inicio de sesión exitoso (aquí va tu lógica de backend)
            alert("Inicio de sesión exitoso");
            formulario.reset();

        // Redirigir a la página principal después de 1.5 segundos
            setTimeout(() => {
            window.location.href = "../index.html";  // Redirige a la página principal, puedes cambiar esto según tu flujo
            }, 1500);
        }
    });

    function mostrarError(input, mensaje, tipo) {
        limpiarError(input);
        const error = document.createElement("small");
      // Aplicar la clase correcta según el tipo
        error.classList.add(tipo === "success" ? "text-success" : "text-danger");
        error.textContent = mensaje;
      // Aplicar el borde correcto según el tipo
        input.classList.add(tipo === "success" ? "border-success" : "border-danger");
        input.parentElement.appendChild(error);
    }

    function limpiarError(input) {
        input.classList.remove("border-danger", "border-success");
        const error = input.parentElement.querySelector("small");
        if (error) {
            error.remove();
        }
    }
    
    function validarCorreo(correo) {
        const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresion.test(correo);
    }
});
