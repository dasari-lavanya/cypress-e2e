///reference types="cypress"/>
export class Registration
{
    Weblocators={
        FirstName:"#input-firstname",
        LastName:"#input-lastname",
        Email:"#input-email",
        Telephone:"#input-telephone",
        Password:"#input-password",
        PasswordConfirm:"#input-confirm",
        Subscribe:'input[value="0"]',
        Policycheck:'input[type="checkbox"]',
        continue:".btn.btn-primary",
        errormsg:".alert"

    }
    
   openURL()
    {
       
        cy.visit(Cypress.env('URL'))
    }
    enterFirstname(Fname)
    {
        cy.get(this.Weblocators.FirstName).type(Fname)
    }
    enterLastname(Lname)
    {
        cy.get(this.Weblocators.LastName).type(Lname)
    }
    enterEmail(email)
    {
        cy.get(this.Weblocators.Email).type(email)   
    }
    enterTelephone(phoneno)
    {
        cy.get(this.Weblocators.Telephone).type(phoneno)
    }
    enterPassword(password)
    {
        cy.get(this.Weblocators.Password).type(password)
        cy.get(this.Weblocators.PasswordConfirm).type(password)

    }
    getSubscribe()
    {
        cy.get(this.Weblocators.Subscribe).click()
    }
    selectPolocy()
    {
        cy.get(this.Weblocators.Policycheck).click()
    }
    selectcontinue()
    {
        cy.get(this.Weblocators.continue).click()
    }
    asserttext()
    {
        const msg = " Warning: E-Mail Address is already registered!"
        cy.get(this.Weblocators.errormsg).should('have.text',msg)
    }


}