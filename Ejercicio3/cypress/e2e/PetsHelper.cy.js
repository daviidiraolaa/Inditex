class PetsHelper {
  constructor(petsList) {
    this.petsData = petsList; // Asigna la lista de mascotas proporcionada
  }

  getAllPets() {
    this.clearPets(); // Limpia la lista de mascotas

    var mascota = [];

    // Obtiene las mascotas vendidas
    cy.getPets("sold").then((response) => {
      const { body } = response;
      expect(response.status).to.eq(200);

      // Añade las mascotas vendidas a la lista
      for (var i = 0; i < response.body.length; i++) {
        var obj = response.body[i];
        mascota.push(obj);
      }

      // Obtiene las mascotas pendientes
      cy.getPets("pending").then((response1) => {
        const { body } = response1;
        expect(response1.status).to.eq(200);

        // Añade las mascotas pendientes a la lista
        for (var i = 0; i < response1.body.length; i++) {
          var obj = response1.body[i];
          mascota.push(obj);
        }

        // Obtiene las mascotas disponibles
        cy.getPets("available").then((response2) => {
          const { body } = response2;
          expect(response2.status).to.eq(200);

          // Añade las mascotas disponibles a la lista
          for (var i = 0; i < response2.body.length; i++) {
            var obj = response2.body[i];
            mascota.push(obj);
          }

          const contadorNombres = {};

          // Recorre el arreglo y cuenta las mascotas por nombre
          mascota.forEach((masc) => {
            const nombre = masc.name;
            if (contadorNombres[nombre]) {
              contadorNombres[nombre]++;
            } else {
              contadorNombres[nombre] = 1;
            }
          });

          // Imprime los resultados
          for (const nombre in contadorNombres) {
            var formatted = nombre.trim() != "" ? nombre : "**SIN NOMBRE**";
            if (contadorNombres[nombre] > 1){
              console.log(`${formatted}: ${contadorNombres[nombre]}`);
              cy.log(`${formatted}: ${contadorNombres[nombre]}`)
            }
          }
        });
      });
    });

    return [];
  }

  clearPets() {
    this.petsData = Array(); // Limpia la lista de mascotas
  }
}

export default PetsHelper;
