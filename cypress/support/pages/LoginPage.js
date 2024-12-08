class LoginPage {

    clickMyAccount() {
        cy.contains('span', 'Faça seu login')
            .click();
    }

    inputUser(user) {
        cy.get('#login')
            .type(user)
    }

    inputPassword(password) {
        cy.get('#password')
            .type(password)
    }

    clickButtonLogin() {
        cy.contains('button', 'Continuar')
            .click()
    }
}

export default new LoginPage()