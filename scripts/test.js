// Clase que representa una actividad
class Actividad {
    constructor(nombre) {
        this.nombre = nombre;
        this.fecha = new Date().toLocaleString(); // Asigna la fecha y hora de creación
    }
}

// Clase que maneja la lista de actividades
class GestorActividades {
    constructor() {
        this.actividades = []; 
    }

    // Método para agregar una nueva actividad
    agregarActividad(nombre) {
        const nuevaActividad = new Actividad(nombre);
        this.actividades.push(nuevaActividad);
        this.mostrarActividades(); // Actualiza la lista de actividades en el DOM
    }

    // Método para mostrar las actividades en el DOM
    mostrarActividades() {
        const listaElement = document.getElementById('activityList');
        listaElement.innerHTML = ''; // Limpiar la lista antes de volver a agregar

        // Recorre las actividades y las muestra en el DOM
        this.actividades.forEach((actividad, index) => {
            const actividadElement = document.createElement('div');
            actividadElement.classList.add('activity-item');
            actividadElement.innerHTML = `
                <strong>${actividad.nombre}</strong> <em>(${actividad.fecha})</em>
                <button onclick="gestor.eliminarActividad(${index})">Eliminar</button>
            `;
            listaElement.appendChild(actividadElement);
        });
    }

    // Método para eliminar una actividad por su índice
    eliminarActividad(indice) {
        this.actividades.splice(indice, 1); // Elimina la actividad del array
        this.mostrarActividades(); // Actualiza la lista de actividades en el DOM
    }
}

// Instancia del gestor de actividades
const gestor = new GestorActividades();

// Manejar el envío del formulario
document.getElementById('activityForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que la página se recargue
    const actividadInput = document.getElementById('activity');
    const actividadNombre = actividadInput.value.trim();

    if (actividadNombre) {
        gestor.agregarActividad(actividadNombre); // Agrega la nueva actividad
        actividadInput.value = ''; // Limpia el input
    }
});
