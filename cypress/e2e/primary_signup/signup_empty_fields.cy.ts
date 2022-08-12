import {SignupPage} from "../../page_objects/signup.page";

const signup_page = new SignupPage();

describe('Signup with empty fields', () => {
    it('Empty name', () => {
        cy.visit(Cypress.env('url'));
        signup_page.fill_email(Cypress.env('email'))
        signup_page.fill_pass(Cypress.env('pass'))
        signup_page.click_terms()
        signup_page.click_signup()

        cy.get('#nameError').should('have.text', 'Please enter your name.');
    });

    it('Empty email', () => {
        cy.visit(Cypress.env('url'));
        signup_page.fill_name(Cypress.env('name'))
        signup_page.fill_pass(Cypress.env('pass'))
        signup_page.click_terms()
        signup_page.click_signup()

        cy.get('#emailError').should('have.text', 'Enter your email address.')
    });

    it('Empty pass', () => {
        cy.visit(Cypress.env('url'));
        signup_page.fill_name(Cypress.env('name'))
        signup_page.fill_email(Cypress.env('email'))
        signup_page.click_terms()
        signup_page.click_signup()

        cy.get('[data-testid=\'please-enter-your-password-1\']').should('contain.text', 'Enter your password.')
    });

    it('Empty terms', () => {
        cy.visit(Cypress.env('url'));
        signup_page.fill_name(Cypress.env('name'))
        signup_page.fill_email(Cypress.env('email'))
        signup_page.fill_pass(Cypress.env('pass'))
        signup_page.click_signup()

        cy.get('#termsError').should('have.text', 'Please agree with the Terms to sign up.')
    })
})