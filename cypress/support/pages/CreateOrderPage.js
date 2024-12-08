class CreateOrderPage {

    clickButtonFinishOrder() {
        cy.contains('div.resume-buttons', 'Continuar')
            .click()
                .wait(2000)
    }

    clickButton() {
        cy.get('button[class="btn btn-finish-order btn-block"]')
            .should('be.visible')
                .click({ force: true })
    }
}

export default new CreateOrderPage()