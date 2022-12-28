/// <reference types="cypress" />

describe('Catalog', () => {
    beforeEach(() => {
        cy.visit('/');

    });

    it('should open and close', () => {
        cy.get('[data-cy="catalog-button"]').click();
        cy.get('[data-cy="backdrop"]').click({ force: true });
        cy.get('[data-cy="catalog-window"]').should('not.exist');

    });

    it('should open links', () => {
        cy.get('[data-cy="catalog-button"]').click();
        cy.get('[data-cy="catalog-type-link"]')
            .first()
            .invoke('attr', 'href')
            .then((href) => {
                cy.get('[data-cy="catalog-type-link"]').first().click();
                cy.location('pathname').should('equal', href);
            });

        cy.get('[data-cy="catalog-button"]').click();
        cy.get('[data-cy="catalog-category-link"]')
            .first()
            .invoke('attr', 'href')
            .then((href) => {
                cy.get('[data-cy="catalog-category-link"]').first().click();
                cy.location('pathname').should('equal', href);
            });
    });
});
