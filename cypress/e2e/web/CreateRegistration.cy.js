/// <reference types="cypress" /> 
import CreateRegistrationPage from "../../support/pages/CreateRegistrationPage"
import CreateRegistrationFixture from "../../fixtures/web/CreateRegistrationFixture"
import AccessEnvironmentPage from "../../support/pages/AccessEnvironmentPage"
describe('', () => {
    beforeEach(() => { 
        AccessEnvironmentPage.enlargeScreen()
    });
    it('Cenario 1 - Validar cadastro na plataforma', () => {
        AccessEnvironmentPage.accessEnvironment('cadastro')
        CreateRegistrationPage.inputName(CreateRegistrationFixture.name)
        CreateRegistrationPage.inputCpf(CreateRegistrationFixture.cpf)
        CreateRegistrationPage.inputEmail(CreateRegistrationFixture.email)
        CreateRegistrationPage.inputCellPhone(CreateRegistrationFixture.cellPhone)
        CreateRegistrationPage.inputPassword(CreateRegistrationFixture.password)
        CreateRegistrationPage.inputPasswordConfirmation(CreateRegistrationFixture.password)
        CreateRegistrationPage.clickButtonCreateAccount()
        CreateRegistrationPage.validateRegistration()
    });
    
});