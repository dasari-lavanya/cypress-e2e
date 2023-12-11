///reference types="cypress"/>
import {Registration } from "../../Pom/locators";
import example from "../../fixtures/example.json";
describe('Test Automation',()=>{

it('registrationPage',()=>
{
//cy.visit('baseUrl')
const registration =new Registration
registration.openURL()
registration.enterFirstname(example.Fname)
registration.enterLastname(example.Lname)
registration.enterEmail(example.email)
registration.enterTelephone(example.phoneno)
registration.enterPassword(example.password)
registration.getSubscribe()
registration.selectPolocy()
registration.selectcontinue()
registration.asserttext()

})
})
