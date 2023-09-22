class Eden {
 getSearchInput() {
  return cy.get("#espectaculoList");
 }

 getSearchSuggestion() {
    return cy.get('ul.ui-autocomplete[id^="ui-id-"]');
 }
}
module.exports = new Eden();
