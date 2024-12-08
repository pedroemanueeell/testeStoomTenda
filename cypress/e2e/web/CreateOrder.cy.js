/// <reference types="cypress" /> 
import AccessEnvironmentPage from "../../support/pages/AccessEnvironmentPage"
import LoginPage from "../../support/pages/LoginPage"
import CreateCartPage from "../../support/pages/CreateCartPage"
import CreateOrderPage from "../../support/pages/CreateOrderPage"

describe('Criar um pedido', () => {
    beforeEach(() => { 
        AccessEnvironmentPage.accessEnvironment()
        AccessEnvironmentPage.enlargeScreen()
        AccessEnvironmentPage.buttonClose()
        AccessEnvironmentPage.clickButtonTermAccept()        
        LoginPage.clickMyAccount()
        LoginPage.inputUser('kemiro5622@ckuer.com')
        LoginPage.inputPassword('BcpkaQphl4ps8ALqyIhjW')
        LoginPage.clickButtonLogin()
    });
    it('Cenario 1: Criar um pedido via boleto ', () => {
        AccessEnvironmentPage.loadPage()
        AccessEnvironmentPage.accessEnvironment('aves')        
        CreateCartPage.validatePage('Aves')
        CreateCartPage.clickProduct(0)
        CreateCartPage.viewCart()
        CreateOrderPage.clickButtonFinishOrder()
        CreateOrderPage.clickButton()
    });
    
});