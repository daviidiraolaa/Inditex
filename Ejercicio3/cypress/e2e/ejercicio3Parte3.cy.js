// Importa la clase PetsHelper desde el archivo "PetsHelper.cy.js"
import PetsHelper from "../e2e/PetsHelper.cy";

// Crea un array vacío para almacenar las mascotas
var petsList = [];

// Define un caso de prueba para obtener y listar las mascotas
it("Obtener y listar las mascotas", () => {
  // Crea una instancia de PetsHelper pasando la lista de mascotas
  var petsHelper = new PetsHelper(petsList);

  // Llama al método para obtener todas las mascotas
  petsHelper.getAllPets();
});
