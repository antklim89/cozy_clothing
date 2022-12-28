/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('getLocalstorage', (itemName) => {
    return cy.getAllLocalStorage().then((allStorages) => {
        const storage = Object.values(allStorages).shift();
        if (!storage) return null;
        try {
            return JSON.parse(storage[itemName] as string || '');
        } catch (error) {
            return null;
        }
    });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
