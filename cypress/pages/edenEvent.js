class EdenEvent {

getSearchSuggestions() {
   return cy.get('ul.ui-autocomplete[id^="ui-id-"]');
}
getEventTitle() {
   return cy.get(".fechas-funciones span").first();
}
//fechas
getEventMonth() {
   return cy.get(".fechas-funciones span").last();
}
getEventDay(){
   return cy.get("#calendarDay");
}
getEventHour(){
   return cy.get("#calendarTime");
}
}
module.exports = new EdenEvent();
