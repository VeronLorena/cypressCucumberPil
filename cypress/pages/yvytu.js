class Yvytu {
    //Header
    getMenuAllButton(){
        return cy.get("nav#menu-nav a");
    }
}
module.exports = new Yvytu();