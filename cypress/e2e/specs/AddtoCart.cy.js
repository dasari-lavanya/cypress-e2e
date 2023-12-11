///const cypressConfig = require("../../../cypress.config");
///reference types="cypress"/>
import { HomePage } from "../../Pom/HomePage";
import  testdata  from "../../fixtures/testdata.json";
const homepage= new HomePage()
describe('test automation',()=>{
   before(() =>
   {
        cy.Login(testdata.login.username, testdata.login.password)

    })
    it('adding product to cart', ()=>
    {
        homepage.searchProduct(testdata.Product.ProductName)
        homepage.selectProduct().should('be.visible')
        homepage.AddToCart()
        homepage.Verfiysuccessmessage().should('contain',testdata.SuccessMessage.Message)


    })
})