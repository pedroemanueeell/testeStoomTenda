class AccessEnvironmentPage {
    
    accessEnvironment(environment) {
        cy.visit(`/${environment}`)   
    }

    buttonClose() {
        cy.get('button.ButtonClose')
            .click()
    }

    clickButtonTermAccept() {
        cy.contains('button', 'CONCORDO E FECHAR')
            .click();
    }

    enlargeScreen() {
        cy.viewport(1920, 1080)
    }

    loadPage() {
        cy.wait(2000)
    }
}

export default new AccessEnvironmentPage()