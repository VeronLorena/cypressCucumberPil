import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then(`se compara {string} con la imagen base`,(imgeName) => {
 cy.compareSnapshot(imgeName);
});

Then (`se verifica que este elemnto {string} posee los atributos`, (locator, tabla) => {
    tabla = tabla.rows();

    tabla.forEach((element, $index) => {
    const propertyCss = element[0];
    const propertyCssvalue = element [1];

    cy.get(locator).should("have.css", propertyCss, propertyCssvalue);

    cy.log(`El elemento de index ${$index} tiene el valor ${JSON.stringify(element
      )}`
      );
    });
});