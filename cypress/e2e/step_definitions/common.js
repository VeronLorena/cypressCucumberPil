import { Given } from "@badeball/cypress-cucumber-preprocessor";
const Yvytuhome = require ("../../pages/yvytupage.js");

Given(`que un usuario esta en la página {string}`, (urlName) =>{
    if (urlName == "Yvytu") {
        cy.visit("https://vientosdelaselva.com.ar/");
    }
});
//https://www.edenentradas.com.ar/sitio/contenido/inicio