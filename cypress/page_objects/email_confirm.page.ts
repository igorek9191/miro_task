/// <reference types="cypress" />

export class EmailConfirmPage{

    private signup_title:string = 'div.signup > h1'

    check_sighup_title(title:string){
        cy.get(this.signup_title).should('have.text', title)
    }
}