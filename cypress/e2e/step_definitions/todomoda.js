import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then(`se compara {string} con la imagen base`,(imgeName) => {
 cy.compareSnapshot(imgeName);
});