/// <reference types="Cypress" />

describe('Products page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
    cy.intercept('/products?*').as('getProducts');
  });

  it('Loads and displays products', () => {
    cy.findByLabelText('Loading').should('exist');
    cy.findByLabelText('Loading').should('not.exist');
    cy.findByText('Incredible Plastic Pizza').should('exist');
  });

  it('Applies Active filter and displays filtered products', () => {
    cy.contains('Unavailable').should('exist');

    cy.contains('Active').click();
    cy.findByLabelText('Active').should('be.checked');
    cy.wait('@getProducts').its('request.url').should('include', 'active=true');

    cy.contains('Show details').should('exist');
    cy.contains('Unavailable').should('not.exist');
  });

  it('Applies Promo filter and displays filtered products', () => {
    cy.contains('Generic Metal Shirt').should('exist');

    cy.contains('Promo').click();
    cy.findByLabelText('Promo').should('be.checked');
    cy.wait('@getProducts').its('request.url').should('include', 'promo=true');

    cy.contains('Incredible Plastic Pizza').should('exist');
    cy.contains('Generic Metal Shirt').should('not.exist');
  });

  it('Applies search filter and displays filtered products', () => {
    cy.contains('Licensed Cotton Soap').should('exist');
    cy.contains('Incredible Steel Bacon').should('not.exist');

    cy.findByLabelText('Search').type('Incredible');
    cy.wait('@getProducts')
      .its('request.url')
      .should('include', 'search=Incredible');

    cy.contains('Incredible Steel Bacon').should('exist');
    cy.contains('Licensed Cotton Soap').should('not.exist');
  });

  it('Displays empty list message when no products found', () => {
    cy.findByLabelText('Search').type('Non existing product');
    cy.findByText("Ooops... It's empty here");
  });
});
