// Definir un array para almacenar las mascotas
var petsList = Array();

// Paso 2: Obtener y listar las mascotas vendidas
it("Obtener y listar las mascotas vendidas", () => {
  // Realizar una petición para obtener las mascotas vendidas
  cy.getPets("sold").then((response) => {
    // Llamar a la función para procesar y listar las mascotas
    getPets(response.body);
    listPets(petsList);
  });
});

// Función para procesar la lista de mascotas
function getPets(petsData) {
  for (const pets of petsData) {
    // Crear un objeto con el id y nombre de la mascota y añadirlo a la lista
    const mascota = { id: pets.id, nombre: pets.name };
    petsList.push(mascota);
  }
  return petsList;
} 

// Función para listar las mascotas
function listPets(petsList) {
  for (const pet of petsList) {
    console.log("Pet id: " + pet.id);
    cy.log("Pet id: " + pet.id)
    console.log("Name pet: " + pet.nombre);
    cy.log("Name pet: " + pet.nombre)
  }
}
