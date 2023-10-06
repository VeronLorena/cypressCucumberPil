class TodoModaPage {
    //Scroll hasta el boton susbirce    &&     //Hacer Click al boton suscrirce 
getSustext() {
    return cy.get("[data-pb-style='64B4BC128D5A8']");
}
getSusbtn(){
    return cy.get("[data-pb-style='64B4BC128D5E7']");
}
    //Rellenar formulario
getNombre(){
    return cy.get("#name.input-text.validate-alpha-with-space");
}

getApellido(){
    return cy.get("#lastname");
}

getEmail(){
    return cy.get("#email");
}

getDni(){
    return cy.get("#taxvat");
}

getProvcia(){
    return cy.get("#region_id");
}

getCiudad(){
    return cy.get("#city");
}

getCheckboxInfo(){
    return cy.get("#opt-in");
}
getCheckboxInfo2(){
    return cy.get("#terms-and-conditions");
}
//Iframe codigo

getRobot(){
    return cy.get("#recaptcha-anchor");
}


}
module.exports = new TodoModaPage();
