# Proyecto de Pruebas Automatizadas con Cypress

Este proyecto contiene pruebas automatizadas utilizando Cypress para una tienda de mascotas.

## Descripción de los Ejercicios

### Ejercicio 1: Crear y Recuperar Usuario

En este ejercicio, se realiza una petición HTTP para crear un usuario en la tienda de mascotas y luego se recupera su información.


```
it("Crea un usuario y recupera sus datos", () => {
  // ...
});
```
## Ejercicio 2: Obtener y Listar Mascotas Vendidas
En este ejercicio, se obtiene un JSON con mascotas vendidas y se listan los nombres de las mascotas.


```
it("obtener y listar las mascotas", () => {
  // ...
});

function getPets(petsData) {
  // ...
}

function listPets(petsList) {
  // ...
}
```

## Ejercicio 3: Tratamiento de Datos en APIs
En este ejercicio, se crea una clase PetsHelper para procesar y contar las mascotas con el mismo nombre.

```
it("obtener y listar las mascotas", () => {
  var petsHelper = new PetsHelper(petsList);
  petsHelper.getAllPets();
});
```

##Estructura de Directorios

cypress: Contiene las pruebas Cypress.
integration: Contiene los archivos de pruebas.
support: Contiene archivos de soporte, incluido commands.js con comandos personalizados.
e2e: Contiene la clase PetsHelper para el tercer ejercicio.

##Comandos Personalizados

```
Cypress.Commands.add("setUsers", () => { ... });
Cypress.Commands.add("getUserInfo", (userName) => { ... });
Cypress.Commands.add("getPets", (status) => { ... });
```

##Requisitos
Node.js y npm deben estar instalados en tu sistema.
