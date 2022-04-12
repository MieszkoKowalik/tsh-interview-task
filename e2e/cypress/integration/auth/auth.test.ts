/// <reference types="Cypress" />
import { NavigationMenu } from '../../pages/Navigation';

describe('User auth', () => {
  beforeEach(() => {
    cy.visit(NavigationMenu.loginLink);
  });

  it('Invalidates form when submitted with empty inputs', () => {
    cy.findByText('Log in').click();

    cy.get('input:invalid').should('have.length', 2);
  });

  it('Can Log in a user', () => {
    cy.findByLabelText('Username').type('string');
    cy.findByLabelText('Password').type('string');

    cy.findByText('Log in').click();
  });
});
