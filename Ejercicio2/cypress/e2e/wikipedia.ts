import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const googleUrl = "https://www.google.com";
const wikipediaUrl = "https://es.wikipedia.org";

Given("Configurar resolución de la pantalla", () => {
  // Configurar la resolución de la pantalla
  const viewportWidth = 1280; // Ancho deseado
  const viewportHeight = 720; // Alto deseado
  cy.viewport(viewportWidth, viewportHeight);
});

When("Abrir la página de Google", () => {
  // Abrir la página de Google
  cy.visit(googleUrl);
});

When("Buscar la palabra {string} en Google", (query) => {
  // Ingresar la palabra en la barra de búsqueda y presionar Enter
  cy.get('textarea[name="q"]').type(`${query}{enter}`);
});

Then("Aceptar las cookies", () => {
  // Aceptar las cookies si aparece el mensaje
  cy.get('button#L2AGLb').click();
});

When("Hacer clic en el enlace de Wikipedia", () => {
  // Hacer clic en el enlace de Wikipedia en los resultados de búsqueda
  cy.get('a[href*="wikipedia.org"]').first().click();
  cy.origin(wikipediaUrl, () => {
    // Verificar que la URL haya cambiado a Wikipedia
    cy.url().should("include", "wikipedia.org");
  });
});

When("Extraer el año del primer proceso automático", () => {
  cy.origin(wikipediaUrl, () => {
    // Extraer el año del primer proceso automático desde la página de Wikipedia
    cy.get("body").invoke("text").then((response) => {
      const regex = /(\d{4})[^0-9]*primer proceso/; // Expresión regular para extraer el año (en formato de cuatro dígitos)
      const match = response.match(regex);

      if (match && match[1]) {
        const año = match[1];
        cy.log(`Año del primer proceso automático: ${año}`);
        cy.task('log', `Año del primer proceso automático: ${año}`)
      } else {
        throw new Error('No se pudo encontrar el año del primer proceso');
      }
    });
  });
});

When("Capturar página de Wikipedia", () => {
  cy.origin(wikipediaUrl, () => {
    // Capturar una imagen de la página de Wikipedia
    cy.screenshot('wikipedia-page'); // Proporcionar un nombre de archivo para el screenshot
  });
});
