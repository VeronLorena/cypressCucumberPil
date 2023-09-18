# Para iniciar con el proyecto usando cucumber

![Imagen derorativa del perfil](https://media.tenor.com/_jagjmdZu28AAAAC/spongebob-question.gif)

## Ejecutar comandos como:

- 1 comando : npm init
- 2 comando: npm install cypress
- 3 comando: npm install @badeball/cypress-cucumber-preprocessor
- 4 comando: npm install @badeball/cypress-esbuild-preprocessor
- 5 comando: npx cypress open

## IMPORTANTE:

![Imagen derorativa del perfil](https://media2.giphy.com/media/odegvNEsYf0Ig/giphy.gif?cid=ecf05e47vqwp5tbgsgvq7g4ggnrx1s456n87bb2orfrhmhyu&ep=v1_gifs_search&rid=giphy.gif&ct=g)

- Para subir los cambios los comandos son:

* git status
* git add . (para agregar todo el cambio) - git add " y nombre del archivo" (para agregar un archivo el especifico)
* git commit -m "cambio que se realizo" (para dar nombre al cambio)
* git push (para subir el cambio)

## Para Usar las librerias o Pakages intalados

![Imagen derorativa del perfil](https://media4.giphy.com/media/nGtOFccLzujug/giphy.gif?cid=ecf05e47enmwa472znv7eqxpdlf3q9paq1vnyr8giny41lbs&ep=v1_gifs_related&rid=giphy.gif&ct=g)

- Importar archivos en el "cypress.config"

* const { defineConfig } = require("cypress");
* const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
* const addCucumberPreprocesorPlugin = require ("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
* const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

## Crear archivos

![Imagen derorativa del perfil](https://media3.giphy.com/media/BIA2rRLTq0ibe/giphy.gif?cid=ecf05e47hafzpdd3utmghp5kw5mbm7aes043k0llm3g6zaow&ep=v1_gifs_search&rid=giphy.gif&ct=g)

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

## Test multiples

- Ningun parametro (nada entre comillas)
- Un parametro (una variable entre comillas)
- Multiples parametros (cada uno entre comillas)

## Test utilizando tablas

- Tablas sencillas de una linea - (hashe)
- Tablas con "cabecera" y una o multiples lineas - (rows)
- Tablas traspuestas (columnas a filas) - (raw/rawTable)
- Tablas de Scenarios Outline - (rowsHash)
