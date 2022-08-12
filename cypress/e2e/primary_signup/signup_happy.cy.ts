import {SignupPage} from "../../page_objects/signup.page";
import {EmailConfirmPage} from "../../page_objects/email_confirm.page";

const signup_page = new SignupPage();
const confirm_page = new EmailConfirmPage();

describe('Happy signup', () => {
    it('Happy signup', () => {
        cy.visit(Cypress.env('url'));
        signup_page.fill_name(Cypress.env('name'))
        signup_page.fill_email(Cypress.env('email'))
        signup_page.fill_pass(Cypress.env('pass'))
        signup_page.click_terms()
        signup_page.click_signup()

        confirm_page.check_sighup_title('Check your email')
    })
})