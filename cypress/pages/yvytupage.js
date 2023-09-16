class Yvytu {
    //Header
    getMenuAllButton(){
        return cy.get("nav#menu-nav a");
    }
    //Banner de Images
    getCurrentImageBanner() {
        return cy.get(
          `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
        );
      }
      getImgButton() {
        return cy.get("ul").first().find("li button");
      }
}
module.exports = new Yvytu();

//`[class^="w-full h-600 bg-[url('/public/images/header-gallery/')] slick-slide slick-current slick-active"]`