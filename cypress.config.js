const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocesorPlugin = require ("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;



module.exports = defineConfig({
  "chromeWebSecurity": false,
  env:{
    TAGS:"not @ignore",
    YVYTU_URL:"https://vientosdelaselva.com.ar/",
    EDEN_URL:"https://www.edenentradas.com.ar/sitio/contenido/inicio",
    TODOMODA_URL:"https://ar.todomoda.com/",
  },
    e2e: {
   
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
      const bundler = createBundler ({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor",bundler);
      await addCucumberPreprocesorPlugin(on, config);
      require("cypress-image-diff-js/dist/plugin")(on, config);
      return config;
    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
  video: false,
  retries: {
    openMode: 0
  },
  
    
  
  
});
