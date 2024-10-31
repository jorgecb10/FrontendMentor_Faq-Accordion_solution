document.addEventListener('DOMContentLoaded', () => {
    console.log('documento listo');

    const imagen1 = document.querySelector('#expandir1')
    const divPregunta1 = document.querySelector('#div-pregunta1')
    const enlace1 = document.querySelector('#pregunta1')
    const imagen2 = document.querySelector('#expandir2')
    const divPregunta2 = document.querySelector('#div-pregunta2')
    const enlace2 = document.querySelector('#pregunta2')
    const imagen3 = document.querySelector('#expandir3')
    const divPregunta3 = document.querySelector('#div-pregunta3')
    const enlace3 = document.querySelector('#pregunta3')
    const imagen4 = document.querySelector('#expandir4')
    const divPregunta4 = document.querySelector('#div-pregunta4')
    const enlace4 = document.querySelector('#pregunta4')

    enlace1.addEventListener('click', e => {
        e.preventDefault()

        gestionarRespuestas(divPregunta1, `
            Frontend Mentor offers realistic coding challenges to help developers improve their 
            frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
            all levels and ideal for portfolio building.
            `)
        
        cambiarIcono(imagen1)
    })

    enlace2.addEventListener('click', e => {
        e.preventDefault()

        gestionarRespuestas(divPregunta2, `
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
            option providing access to a range of projects suitable for all skill levels.
            `)

        cambiarIcono(imagen2)
    })

    enlace3.addEventListener('click', e => {
        e.preventDefault()

        gestionarRespuestas(divPregunta3, `
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!
            `)

        cambiarIcono(imagen3)
    })

    enlace4.addEventListener('click', e => {
        e.preventDefault()
        gestionarRespuestas(divPregunta4, `
            The best place to get help is inside Frontend Mentor's Discord community. There's a help 
            channel where you can ask questions and seek support from other community members.
            `)

        cambiarIcono(imagen4)
    })

    function gestionarRespuestas(div, mensaje) {
        const parrafoExistente = div.querySelector('.respuesta');

        if (!parrafoExistente) {
            // Mostrar la nueva respuesta
            mostrarRespuesta(div, mensaje);
        } else {
            // Si la respuesta ya está visible, la oculta
            ocultarRespuesta(parrafoExistente);
        }
    }

    // Función que oculta una respuesta existente
    function ocultarRespuesta(parrafo) {
        parrafo.classList.remove('visible'); // Animación para ocultar
        setTimeout(() => {
            if (parrafo.parentElement) {
                parrafo.parentElement.removeChild(parrafo); // Eliminar el párrafo después de la animación
            }
        }, 150); // Tiempo de la animación de ocultar
    }

    // Función que muestra una nueva respuesta
    function mostrarRespuesta(div, mensaje) {
        const parrafo = document.createElement('p');
        parrafo.className = 'respuesta mt-2 text-grayish-purple';
        parrafo.textContent = mensaje;
        div.appendChild(parrafo);

        setTimeout(() => {
            parrafo.style.display = 'block';
            setTimeout(() => {
                parrafo.classList.add('visible'); // Activar la animación de visibilidad
            }, 100);
        }, 100);
    }

    function cambiarIcono(imagen) {
        if (imagen.getAttribute('src') === '../src/assets/images/icon-minus.svg') {
            imagen.setAttribute('src', '../src/assets/images/icon-plus.svg')
        } else {
            imagen.setAttribute('src', '../src/assets/images/icon-minus.svg')
        }
    }
})