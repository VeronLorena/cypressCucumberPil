import { Given } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require ("../../pages/edenEvent.js");

Given(`que un usuario esta en la página {string}`, (urlName) =>{
    if (urlName == "Eden") {
        cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
    }
});