/// <reference types="cypress" />

export class SignupPage {

    private name_input:string = '#name'
    private email_input:string = '#email'
    private pass_input:string = '#password'
    private terms_check_box:string = '#signup-terms'
    private signup_button:string = '[data-testid=\'mr-form-signup-btn-start-1\']'

    fill_name(name:string){
        cy.get(this.name_input).type(name)
    }

    fill_email(email:string){
        cy.get(this.email_input).type(email)
    }

    fill_pass(pass:string){
        cy.get(this.pass_input).click({force: true}).type(pass)
    }

    click_terms(){
        cy.get(this.terms_check_box).click({force: true})
    }

    click_signup(){
        cy.get(this.signup_button).click()
    }

}