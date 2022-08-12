import {SignupPage} from "../../page_objects/signup.page";

const signup_page = new SignupPage();

describe('Signup with non valid values', () => {
    it('Non valid email', () => {
        cy.visit(Cypress.env('url'));
        signup_page.fill_name(Cypress.env('name'))
        signup_page.fill_email('armenian.igor@gmail')
        cy.get('#custom-email-error label').should('have.text', 'Enter a valid email address.')
    });

    it('Non valid password', () => {
        cy.visit(Cypress.env('url'));
        signup_page.fill_name(Cypress.env('name'))
        signup_page.fill_email(Cypress.env('email'))
        signup_page.fill_pass('1234')
        cy.get('[data-text-soso=\'So-so password\']').should('have.text', 'Please use 8+ characters for secure password.')
    });
})