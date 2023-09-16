import { Then } from "@badeball/cypress-cucumber-preprocessor";
const yvytuHome = require ("../../pages/yvytupage");

Then(`visualiza en el header los botones {string}`, (list) => {
    list = list.split(",");
    yvytuHome.getMenuAllButton().each((btn, $inx) => {
        if ($inx != 0) {
            cy.wrap(btn).should("have.text", list[$inx - 1]);
        }
    });
});

Then(`se visualizan las imágenes {string} en el banner`, (imgList) => {
    imgList = imgList.split(", ");
  
    imgList.forEach((banner, inx) => {
      yvytuHome
      .getCurrentImageBanner()
      .should(
        "have.class",
        `bg-[url('/public/images/header-gallery/${banner}.png')]`
        );
  
      yvytuHome
      .getImgButton()
      .its(
        "length")
        .then((cantidad) => {
          if (cantidad != inx + 1) {
        yvytuHome
        .getImgButton()
        .eq(inx + 1)
        .click();
        cy.wait(1000);
          }
        });
    });
});