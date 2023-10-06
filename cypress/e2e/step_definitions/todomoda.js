import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoModaPage from "../../pages/TodoModaPage";

    //Se reliza un screenshot de la pagina

Then(`se compara {string} con la imagen base`,(imgeName) => {
 cy.compareSnapshot(imgeName);
});

    //Se busca compara o encontrar los siguientes atributos

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

    //Scroll hasta el boton susbirce

When(`el usuario realiza scroll hasta {string}`, () => {
    TodoModaPage.getSustext().eq(0).scrollIntoView();
  });
Then(`el botón {string} es visible`, (btnName) => {
  TodoModaPage.getSusbtn().eq(0).contains(btnName).should("be.visible");
});

   //Hacer Click al boton suscrirce y rellenar formulario
When(`el usuario hace click en {string}`,(Susbtn) => {
 TodoModaPage.getSusbtn().contains(Susbtn).click();
});
Then(`rellena el siguiente formulario con sus datos`,() => {

    const nombre = Cypress.env()[0].nombre;
    const apellido = Cypress.env()[0].apellido;
    const email = Cypress.env()[0].email;
    const dni = Cypress.env()[0].dni;
    const ciudad = Cypress.env()[0].ciudad;

    //ifreme codigo salvador
    const getIframeDocument = () => {
      return cy
      .get('iframe[title="reCAPTCHA"]')
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its('0.contentDocument').should('exist')
    }
    
    const getIframeBody = () => {
      // get the document
      return getIframeDocument()
      // automatically retries until body is loaded
      .its('body').should('not.be.undefined')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap)
    }


    TodoModaPage.getNombre().type(nombre)
    TodoModaPage.getApellido().type(apellido)
    TodoModaPage.getEmail().type(email)
    TodoModaPage.getDni().type(dni)
    
    TodoModaPage.getProvcia('select').select('Córdoba').should('have.value', '2528')
    TodoModaPage.getCiudad().type(ciudad)
    TodoModaPage.getCheckboxInfo().click();
    TodoModaPage.getCheckboxInfo2().click();
   
    getIframeBody().find('#recaptcha-anchor').click();
});