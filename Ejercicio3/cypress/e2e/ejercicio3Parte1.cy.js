// Paso 1: Crear un usuario y luego recuperar sus datos
it("Crea un usuario y recupera sus datos", () => {
  // Paso 1a: Realizar una petición para crear un usuario
  cy.setUsers().then((response) => {
    const { body } = response;
    expect(response.status).to.eq(200); // Verificar que la petición fue exitosa
  });

  // Paso 1b: Obtener información del usuario creado
  cy.getUserInfo("david").then((response) => {
    const { body } = response;

    expect(response.status).to.eq(200); // Verificar que la petición fue exitosa
    const responseBody = response.body;

    // Imprimir y registrar en logs la información del usuario tanto por consola como por logs de cypress
    console.log("Id: " + responseBody.id);
    cy.log("Id: " + responseBody.id);
    console.log("Username: " + responseBody.username);
    cy.log("Username: " + responseBody.username);
    console.log("FirstName: " + responseBody.firstName);
    cy.log("FirstName: " + responseBody.firstName);
    console.log("LastName: " + responseBody.lastName);
    cy.log("LastName: " + responseBody.lastName);
    console.log("Email: " + responseBody.email);
    cy.log("Email: " + responseBody.email);
    console.log("Password: " + responseBody.password);
    cy.log("Password: " + responseBody.password);
    console.log("Phone: " + responseBody.phone);
    cy.log("Phone: " + responseBody.phone);
    console.log("UserStatus: " + responseBody.userStatus);
    cy.log("UserStatus: " + responseBody.userStatus);
  });
});
