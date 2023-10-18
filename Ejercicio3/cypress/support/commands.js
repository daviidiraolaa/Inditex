// Comando personalizado para crear un usuario
Cypress.Commands.add("setUsers", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user",
    body: {
      id: 10,
      username: "david",
      firstName: "Fernandez",
      lastName: "Iraola",
      email: "davidfernandeziraola@hotmail.com",
      password: "12345",
      phone: "600000000",
      userStatus: 0,
    },
  });
});

// Comando personalizado para obtener la información de un usuario por su nombre de usuario
Cypress.Commands.add("getUserInfo", (userName) => {
  cy.request({
    method: "GET",
    url: "https://petstore.swagger.io/v2/user/" + userName,
  });
});

// Comando personalizado para obtener mascotas por su estado
Cypress.Commands.add("getPets", (status) => {
  cy.request({
    method: "GET",
    url: "https://petstore.swagger.io/v2/pet/findByStatus?status=" + status,
  });
});
