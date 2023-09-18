class Yvytu {
    //Header
    getMenuAllButton(){
        return cy.get("nav#menu-nav a");
    }
    //Banner de Images
    getCurrentImageBanner() {
        return cy.get(
          `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
          //`[class^="w-full h-600 bg-[url('/public/images/header-gallery/')] slick-slide slick-current slick-active"]`
        );
      }
      getImgButton() {
        return cy.get("ul").first().find("li button");
      }
      //Generic
      getGenericBtn() {
        return cy.get("button");
      }
      getGenericLink() {
        return cy.get("a");
      }
      //Cabañas
      getCabtitle(){
        return cy.get("h3")
      }
      getItemContainer(){
        return cy.get(`div[class="flex flex-col font-normal"]`)
      }
}
module.exports = new Yvytu();

