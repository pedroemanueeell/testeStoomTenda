class CreateCartPage {

    inputCep(cep) {
        cy.get('#shipping-cep')
            .type(cep)
    }

    clickButtonClickRemove(clickremove) {
        cy.get('div.with-tag')
            .should('be.visible')
                .eq(clickremove)
                    .click();
    }

    clickAdrres() {
        cy.get('span.subtitle-address-option')
            .eq(0)
                .click()
    }

    clickClose(number) {
        cy.get('img[alt="ico_close_with_circle"]')
            .eq(number)
                .click()
    }

    clickProduct(product) {
        cy.get('button#buttonbuy-sku-')
            .eq(product)
                .click()
                    .wait(2000)        
    }

    clickAaddUnitCart() {
        cy.get('div.cartblock-main').within(() => {
            cy.get('span.btn-action')
                .contains('+')
                    .click()
                        .wait(2000)
        })
    }

    clickRemoveUnitCart() {
        cy.get('div.cartblock-main').within(() => {
            cy.get('span.btn-action-decrement')
                .contains('_')
                    .click()
                        .wait(2000)
        })
    }
    
    viewCart(){
        cy.contains('button', 'Ver carrinho')
            .click();
    }

    validateCartQuantity(quantity) {
        cy.contains('div.icon-cart-qtd', `${quantity}`)
    }

    validatePage(validatepage){
        cy.contains('div.TitleComponent', `${validatepage}`)
    }    
}

export default new CreateCartPage()