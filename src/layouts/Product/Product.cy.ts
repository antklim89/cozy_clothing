/// <reference types="cypress" />
import { ICartItem } from '~/components/CartProvider';


describe('Catalog', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-cy="product-list-item"]').first().click();
    });

    it('should', () => {
        cy.get('button').contains('+').click();

        cy.get('button').contains(/add to cart/i).click();

        cy.getLocalstorage<ICartItem[]>('cart').then((cart) => {
            expect(cart?.[0].qty).to.eq(2);
        });
    });
});
