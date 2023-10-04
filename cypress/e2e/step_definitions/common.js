import { Given } from "@badeball/cypress-cucumber-preprocessor";


Given(`que un usuario esta en la página {string}`, (urlName) =>{
/*    if (urlName == "Yvytu") {
        cy.visit("https://vientosdelaselva.com.ar/");
    } else if (urlName == "Eden") {
        cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
    }*/

    const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
    cy.visit(url);
});