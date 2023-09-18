import { Then } from "@badeball/cypress-cucumber-preprocessor";   

Then(`leo la siguiente tabla aplicando Hashes`, (table) => {
    table = table.hashes();

    cy.log(table);
    cy.log(table[1]);
    cy.log(table[1].num);
    cy.log(table[1].mes);
});

Then(`leo la siguiente tabla aplicando rows`, (tabla) => {
    tabla = tabla.rows();

    cy.log(tabla);
    cy.log(tabla[0][0]);
    cy.log(tabla[1][1]);
});

Then(`leo la siguiente tabla aplicando raw`, (tabla) => {
    tabla = tabla.raw();

    cy.log(tabla);
    cy.log(tabla[0][0]);
    cy.log(tabla[1][1]);
});

Then(`leo la siguiente tabla aplicando rowsHash`, (tabla) => {
    tabla = tabla.rowsHash();

    cy.log(JSON.stringify(tabla));
    cy.log(tabla["2"]);
});

Then(`leo la siguiente tabla aplicando flat`, (tabla) =>{
    tabla = tabla.raw();
    tabla = tabla.flat();
    cy.log(JSON.stringify(tabla));
});

Then(`leo la siguiente tabla con raw en 1 y aplico flat`,(table) => {
    table = table.rawTable[1];
    table = table.flat();
    cy.log(JSON.stringify(table[0]));
});