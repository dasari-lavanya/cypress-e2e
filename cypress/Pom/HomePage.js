export class HomePage
{
Weblocators={
search_input: ".form-control.input-lg",
search_click:".btn.btn-default.btn-lg",
product:'img[title="MacBook Air"]',
addtocart:'Add to Cart',
message:'.alert.alert-success.alert-dismissible'
}

searchProduct(ProductName)
{
    cy.get(this.Weblocators.search_input).type(ProductName)
    cy.get(this.Weblocators.search_click).click()
}
selectProduct()
{
    return cy.get(this.Weblocators.product)
}
AddToCart()
{
    cy.contains(this.Weblocators.addtocart).click()
}
Verfiysuccessmessage()
{
   return cy.get(this.Weblocators.message)
}




}
