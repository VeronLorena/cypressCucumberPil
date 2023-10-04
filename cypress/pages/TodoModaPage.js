class TodoModaPage {
getSustext() {
    return cy.get("[data-pb-style='64B4BC128D5A8']");
}
getSusbtn(){
    return cy.get("[data-pb-style='64B4BC128D5E7']");
}
}
module.exports = new TodoModaPage();
