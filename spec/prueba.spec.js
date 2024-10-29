const Repository = require("../scripts/index.js"); 
const Activity = require("../scripts/index.js"); 

describe("conjunto de pruebas para la clase Repository", () => {
  let repository; 

  // Antes de cada prueba, inicializamos una nueva instancia de Repository
  beforeEach(() => {
    repository = new Repository();
  });

  it("debe ser una función de clase", () => {
    expect(typeof Repository.prototype.constructor).toBe("function");
  });

  it("debe contener el método addActivity()", () => {
    expect(typeof repository.addActivity).toBe("function"); 
  });

  it("debe agregar correctamente una actividad", () => {
    // Llamamos a createActivity en lugar de crear manualmente una instancia de Activity
    repository.createActivity("Test title", "Test description", "urlImg");

    expect(repository.getAllActivities().length).toBe(1); 
    expect(repository.getAllActivities()[0].title).toBe("Test title"); 
  });

  it("el método getAllActivities() debe retornar un array", () => {
    repository.createActivity("Test title", "Test description", "urlImg");
    const arrayValues = repository.getAllActivities()
    expect(Array.isArray(arrayValues)).toBe(true)
  })

  it("debe encontrar una actividad por su ID", () => {
    // Creamos una actividad y la agregamos
    const activity = repository.createActivity("Test title", "Test description", "urlImg");
    repository.addActivity(activity);

    // Usamos el ID para buscar la actividad
    const foundActivity = repository.findActivity(activity.id);
    expect(foundActivity.title).toBe("Test title");
  });

  it("debe eliminar una actividad correctamente", () => {
    const activity = new Activity("Title", "Description", "urlImg");
    repository.addActivity(activity);
    const result = repository.deleteActivity(activity.id);

    expect(result).toBe(`Activity with ID ${activity.id} has been deleted.`);
    expect(repository.getAllActivities().length).toBe(0); 
  });
});
