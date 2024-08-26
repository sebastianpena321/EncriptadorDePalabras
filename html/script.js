// Espera a que el contenido de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Encuentra los elementos HTML que vamos a usar
    const encriptarBtn = document.getElementById('encriptar-btn');
    const desencriptarBtn = document.getElementById('desencriptar-btn');
    const textInput = document.getElementById('text-input');
    const imagen = document.getElementById('imagen');
    const texto1 = document.getElementById('texto-1');
    const texto2 = document.getElementById('texto-2');

    // Variable para guardar el texto original del textarea
    let textoOriginal = '';

    // Función para encriptar el texto
    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, 'enter')  // Reemplaza 'e' por 'enter'
            .replace(/i/g, 'imes')   // Reemplaza 'i' por 'imes'
            .replace(/a/g, 'ai')     // Reemplaza 'a' por 'ai'
            .replace(/o/g, 'ober')   // Reemplaza 'o' por 'ober'
            .replace(/u/g, 'ufat');  // Reemplaza 'u' por 'ufat'
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, 'e')  // Reemplaza 'enter' por 'e'
            .replace(/imes/g, 'i')   // Reemplaza 'imes' por 'i'
            .replace(/ai/g, 'a')     // Reemplaza 'ai' por 'a'
            .replace(/ober/g, 'o')   // Reemplaza 'ober' por 'o'
            .replace(/ufat/g, 'u');  // Reemplaza 'ufat' por 'u'
    }

    // Función para mostrar advertencias en la página
    function mostrarAdvertencia(mensaje) {
        texto1.textContent = mensaje;  // Muestra el mensaje de advertencia en texto1
        texto2.textContent = '';       // Limpia el texto2
        imagen.style.display = 'none'; // Oculta la imagen
    }

    // Función para verificar si el texto es válido
    function esTextoValido(texto) {
        // Verifica si el texto solo tiene letras minúsculas y espacios
        return /^[a-z\s]*$/.test(texto);
    }

    // Cuando se hace clic en el botón de encriptar
    encriptarBtn.addEventListener('click', () => {
        const texto = textInput.value; // Obtiene el texto del textarea
        if (texto === '') {
            mostrarAdvertencia('No has ingresado texto.'); // Muestra advertencia si está vacío
        } else if (!esTextoValido(texto)) {
            mostrarAdvertencia('El texto debe estar en minúsculas y no debe contener caracteres especiales.'); // Muestra advertencia si el texto no es válido
        } else {
            textoOriginal = texto; // Guarda el texto original
            const textoEncriptado = encriptarTexto(texto); // Encripta el texto
            texto1.textContent = textoEncriptado; // Muestra el texto encriptado en texto1
            texto2.textContent = ''; // Limpia el texto2
            imagen.style.display = 'none'; // Oculta la imagen
            textInput.value = ''; // Limpia el textarea para que el texto no sea visible
        }
    });

    // Cuando se hace clic en el botón de desencriptar
    desencriptarBtn.addEventListener('click', () => {
        if (texto1.textContent === '' || texto1.textContent === 'Ningún mensaje fue encontrado.') {
            mostrarAdvertencia('No hay texto encriptado para desencriptar.'); // Muestra advertencia si no hay texto encriptado
        } else {
            const textoEncriptado = texto1.textContent; // Obtiene el texto encriptado
            const textoDesencriptado = desencriptarTexto(textoEncriptado); // Desencripta el texto
            textInput.value = textoOriginal; // Restaura el texto original al textarea
            texto1.textContent = 'Ningún mensaje fue encontrado.'; // Restablece el mensaje en texto1
            texto2.textContent = 'Ingresa el texto que deseas encriptar o desencriptar.'; // Muestra el mensaje de instrucciones en texto2
            imagen.style.display = 'block'; // Muestra la imagen
        }
    });
});
    