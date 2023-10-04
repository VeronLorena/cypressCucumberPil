import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoModaPage from "../../pages/TodoModaPage";


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

When(`el usuario realiza scroll hasta {string}`, () => {
    TodoModaPage.getSustext().eq(0).scrollIntoView();
  });
Then(`el botón {string} es visible`, (btnName) => {
  TodoModaPage.getSusbtn().eq(0).contains(btnName).should("be.visible");
});