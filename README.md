Este proyecto tiene como objetivo realizar una automatización de pruebas utilizando Cypress para verificar ciertos aspectos en la búsqueda de la palabra "automatización" en Google y en la página de Wikipedia resultante. También captura una captura de pantalla de la página de Wikipedia y extrae el año del primer proceso automático.

Configuración
Asegúrate de tener Node.js instalado en tu sistema.

Clona este repositorio en tu máquina local.

git clone <URL del repositorio>
Navega al directorio del proyecto.

cd automatizacion-con-cypress
Instala las dependencias necesarias.

npm install
Ejecución de las pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:

npx cypress run
Este comando ejecutará las pruebas de Cypress y generará una captura de pantalla de la página de Wikipedia. Los resultados de las pruebas se mostrarán en la terminal.

Estructura del proyecto
cypress/integration: Contiene los archivos de prueba escritos en formato Cucumber.
cypress/support: Contiene archivos de soporte de Cypress.
cypress/config.js: Archivo de configuración de Cypress.

Notas adicionales
Este proyecto se basa en las mejores prácticas recomendadas para escribir pruebas automatizadas. Se han incluido comentarios en el código para facilitar la comprensión y se siguen los principios SOLID y Clean Code. Además, se proporciona un README claro para facilitar la configuración y ejecución de las pruebas.

