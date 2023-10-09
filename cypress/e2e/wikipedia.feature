Feature: Prueba de Automatización

  Scenario: Realizar una búsqueda y capturar información
    Given Configurar resolución de la pantalla
    When Abrir la página de Google
    Then Aceptar las cookies
    When Buscar la palabra "automatización" en Google
    When Hacer clic en el enlace de Wikipedia
    When Extraer el año del primer proceso automático
    When Capturar página de Wikipedia