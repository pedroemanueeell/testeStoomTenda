class CreateRegistrationPage {

    inputName(name) {
        cy.get('#nome')
            .type(name)
    }

    inputCpf(cpf) {
        cy.get('#cpf')
            .type(cpf)
    }

    inputEmail(email) {
        cy.get('#email')
            .type(email)
    }

    inputCellPhone(cellphone) {
        cy.get('input[name="cellphone"]')
            .clear()
                .type(cellphone)
    }

    inputPassword(password) {
        cy.get('#password')
            .type(password)
    }

    inputPasswordConfirmation(passwordconfirmation) {
        cy.get('#password2')
            .type(passwordconfirmation)
    }

    clickButtonCreateAccount() {
        cy.contains('button', 'Criar sua conta no Tenda atacado')
            .click()
                .wait(2000)
    }

    validateRegistration() {
        cy.get('div.Toastify__toast-body')
            .should('contain.text', 'Usuário cadastrado.')
    }


}

export default new CreateRegistrationPage()