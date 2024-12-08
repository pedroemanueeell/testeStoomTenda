/// <reference types="cypress" /> 
import AccessEnvironmentPage from "../../support/pages/AccessEnvironmentPage"
import CreateCartPage from "../../support/pages/CreateCartPage"

describe('Criar carrinho', () => {
    beforeEach(() => { 
        AccessEnvironmentPage.accessEnvironment('confeitaria-')
        AccessEnvironmentPage.enlargeScreen()
        AccessEnvironmentPage.clickButtonTermAccept()
    });
    it('Cenario 1: Adicionar produto seller e tenda ao carrinho', () => {        
        CreateCartPage.inputCep('11702200')
        CreateCartPage.clickButtonClickRemove(0)
        CreateCartPage.clickAdrres()
        CreateCartPage.clickClose(0)
        CreateCartPage.clickClose(2)
        AccessEnvironmentPage.accessEnvironment('confeitaria-')
        CreateCartPage.validatePage('Confeitaria')
        CreateCartPage.clickProduct(0)
        AccessEnvironmentPage.accessEnvironment('produtos-seller')
        CreateCartPage.validatePage('Produtos Seller')
        CreateCartPage.clickProduct(0)
        CreateCartPage.validateCartQuantity(2)
    });

    it('Cenario 2: Adicionar mais uma unidade ao carrinho', () => {
        CreateCartPage.inputCep('11702200')
        CreateCartPage.clickButtonClickRemove(0)
        CreateCartPage.clickAdrres()
        CreateCartPage.clickClose(0)
        CreateCartPage.clickClose(2)
        AccessEnvironmentPage.accessEnvironment('confeitaria-')
        CreateCartPage.validatePage('Confeitaria')
        CreateCartPage.clickProduct(0)
        AccessEnvironmentPage.accessEnvironment('produtos-seller')
        CreateCartPage.validatePage('Produtos Seller')
        CreateCartPage.clickProduct(0)
        CreateCartPage.clickAaddUnitCart()
        CreateCartPage.validateCartQuantity(3)
    });

    it('Cenario 3: Remover uma unidade do carrinho', () => {
        CreateCartPage.inputCep('11702200')
        CreateCartPage.clickButtonClickRemove(0)
        CreateCartPage.clickAdrres()
        CreateCartPage.clickClose(0)
        CreateCartPage.clickClose(2)
        AccessEnvironmentPage.accessEnvironment('confeitaria-')
        CreateCartPage.validatePage('Confeitaria')
        CreateCartPage.clickProduct(0)
        AccessEnvironmentPage.accessEnvironment('produtos-seller')
        CreateCartPage.validatePage('Produtos Seller')
        CreateCartPage.clickProduct(0)
        CreateCartPage.clickRemoveUnitCart()
        CreateCartPage.validateCartQuantity(1)
    });
});