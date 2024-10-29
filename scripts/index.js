class Activity {
    static currentId = 0;

    constructor(title, description, urlImg) {
        this.id = Activity.generateId();
        this.title = title;
        this.description = description;
        this.urlImg = urlImg;
    }

    static generateId() {
        return ++Activity.currentId;
    }
}

class Repository {
    constructor() {
        this.repository = new Map(); // Usamos un Map para manejo más eficiente de IDs
    }

    addActivity(activity) {
        this.repository.set(activity.id, activity); // Almacenar actividad con ID como clave
        return activity;
    }

    getAllActivities() {
        return Array.from(this.repository.values()); // Convertir el Map a array
    }

    findActivity(id) {
        const activity = this.repository.get(id); // Buscar directamente en el Map
        if (!activity) {
            throw new Error(`Error: Activity with ID ${id} not found.`);
        }
        return activity;
    }

    createActivity(title, description, urlImg) {
        const newActivity = new Activity(title, description, urlImg);
        this.addActivity(newActivity);
        return newActivity;
    }

    deleteActivity(id) {
        if (!this.repository.has(id)) {
            throw new Error(`Error: Activity with ID ${id} not found.`);
        }
        this.repository.delete(id); // Eliminar la actividad por su ID
        return `Activity with ID ${id} has been deleted.`;
    }
}

// Ejemplo de uso:
const repository = new Repository();

repository.createActivity("Salir de paseo", "Es muy saludable salir a pasear", "https://www.image.com");
repository.createActivity("Pagar las cuentas", "Cuentas claras, chocolate espeso", "https://www.image.com");
repository.createActivity("Lavar los platos", "Es bueno mantener el orden", "https://www.image.com");

// console.log(repository.getAllActivities());

// Borrar una actividad existente
// try {
//     const message = repository.deleteActivity(2);
//     console.log(message);
// } catch (error) {
//     console.log(error.message);
// }

// Buscar una actividad por ID
// try {
//     const activity = repository.findActivity(1);
//     console.log(activity);
// } catch (error) {
//     console.log(error.message);
// }

// Intentar eliminar una actividad que no existe
// try {
//     repository.deleteActivity(999);
// } catch (error) {
//     console.log(error.message); 
// }

module.exports = Repository




