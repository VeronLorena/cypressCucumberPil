# Para iniciar con el proyecto usando cucumber

## Ejecutar comandos como:

- 1 comando : npm init
- 2 comando: npm install cypress
- 3 comando: npm install @badeball/cypress-cucumber-preprocessor
- 4 comando: npm install @badeball/cypress-esbuild-preprocessor
- 5 comando: npx cypress open

## IMPORTANTE:

- Para subir los cambios los comandos son:

* git status
* git add . (para agregar todo el cambio) - git add " y nombre del archivo" (para agregar un archivo el especifico)
* git commit -m "cambio que se realizo" (para dar nombre al cambio)
* git push (para subir el cambio)

## Para Usar las librerias o Pakages intalados

- Importar archivos en el "cypress.config"

* const { defineConfig } = require("cypress");
* const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
* const addCucumberPreprocesorPlugin = require ("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
* const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

## Crear archivos

- nombreTests.feature
- nombreStep.js
- nombrePage.js

## Agregar extenciones

- Cliquear en icono de la izquierda llamado "extenciones" y buscar e installar lo siguiente:

* Cucumber (Gherkin) Full Support
* Cucumber Formatter
* cypress-cucumber-steps

## Configurar VSC

- 1 File>Preferences>Settings
- 2 Hacer click en la pestaña "Workspace"
- 3 Clic en el boton "Open Setting (JSON)"

* Agregar configuracion {...}

  "workbench.settings.useSplitJSON": false,
  "cucumberautocomplete.steps": [
  "cypress/e2e/step_difinitions/**.js"
  ],
  "cucumberautocomplete.syncfeatures": "cypress/2e2/features/\*_/_.feature",
  "cucumberautocomplete.strictGherkinCompletion":false,
  "cucumberautocomplete.smartSnippets": true,
  "cucumberautocomplete.stepsInvariants": true

## Test realizados utilizando como ejemplo la pagina Yvytu

**_ Test multiples _**

- Ningun parametro (nada entre comillas)
- Un parametro (una variable entre comillas)
- Multiples parametros (cada uno entre comillas)

**_ Test utilizando tablas _**

- Tablas sencillas de una linea
- Tablas con "cabecera" y una o multiples lineas
- Tablas traspuestas (columnas a filas)
- Tablas de Scenarios Outline
