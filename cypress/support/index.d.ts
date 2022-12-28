/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getLocalstorage<T = unknown>(itemName: string): Chainable<T|null>
    }
}
