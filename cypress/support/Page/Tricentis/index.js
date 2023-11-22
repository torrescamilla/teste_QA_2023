const el = require('./elements').ELEMENTS

class Formulario {
   
    //funçao criada para validar acesso à aplicação pela URL//
    acessarURL() {
        cy.visit('https://sampleapp.tricentis.com/101/app.php')
        cy.url().should('include', '/101/app.php')
    }

    //função criada para preencher todos os campos da aba EnterVehicleData//
    preencherEnterVehicleData() {
        cy.get(el.SELECT_MAKE).select('Mercedes Benz').should('have.value', 'Mercedes Benz')
        cy.get(el.SELECT_MODEL).select('Motorcycle').should('have.value', 'Motorcycle')
        cy.get(el.INP_CYLINDER).type('150')
        cy.get(el.INP_ENGINE_PERMFORMACE).type('100')
        cy.get(el.DATE_MANUFACTURE).type('10/10/1998')
        cy.get(el.SELECT_NUMBER_SEATS).select('2').should('have.value', '2')
        cy.get(el.RADIO_RIGHT_HAND_DRIVE).check({ force: true }).should('have.value', 'Yes')
        cy.get(el.SELECT_NUMBER_SEATS_MOTORCYCLE).select('2').should('have.value', '2')
        cy.get(el.SELECT_FUEL_TYPE).select('Gas').should('have.value', 'Gas')
        cy.get(el.INP_PAYLOAD).type('250')
        cy.get(el.INP_TOTAL_WEIGHT).type('100')
        cy.get(el.INP_LIST_PRICE).type('10000')
        cy.get(el.INP_LICENSE_PLATE_NUMBER).type('COO-4017')
        cy.get(el.INP_ANNUAL_MILEAGE).type('30000')
        cy.get(el.BTN_NEXT_ENTER_VEHICLE_DATA).click()

    }

    //função criada para preencher todos os campos da aba EnterInsurantData//
    preencherEnterInsurantData() {
        cy.get(el.INP_FIRST_NAME).type('CAMIILLA')
        cy.get(el.INP_LAST_NAME).type('TORRES')
        cy.get(el.DATE_BIRTH).type('12/06/1998')
        cy.get(el.RADIO_GENDER).check({ force: true }).should('have.value', 'Female')
        cy.get(el.INP_STREET_ADDRESS).type('RUA 5, N.193, SETOR CENTRAL')
        cy.get(el.SELECT_COUNTRY).select('Brazil').should('have.value', 'Brazil')
        cy.get(el.INP_ZIP_CODE).type('75250004')
        cy.get(el.INP_CITY).type('GOIÂNIA')
        cy.get(el.SELECT_OCCUPATION).select('Selfemployed').should('have.value', 'Selfemployed')
        cy.get(el.CHECKBOX_HOBBIES_1).check({ force: true }).should('have.value', 'BungeeJumping')
        cy.get(el.CHECKBOX_HOBBIES_2).check({ force: true }).should('have.value', 'Skydiving')
        cy.get(el.INP_WEBSITE).type('www.teste.com.br')
        cy.get(el.PICTURE).should('not.have.value').selectFile('./cypress/fixtures/img.jpg', { force: true })
        cy.get(el.BTN_NEXT_ENTER_PRODUCT_DATA).click()
    }

    //função criada para preencher todos os campos da aba EnterProductData//
    preencherEnterProductData() {
        cy.get(el.DATE_START).type('01/03/2024')
        cy.get(el.SELECT_INSURANCE_SUM).select('10000000').should('have.value', '10000000')
        cy.get(el.SELECT_MERIT_RATING).select('Bonus 9').should('have.value', 'Bonus 9')
        cy.get(el.SELECT_DAMAGE_INSURANCE).select('Full Coverage').should('have.value', 'Full Coverage')
        cy.get(el.CHECKBOX_OPITIONAL_PRODUCTS).check({ force: true })
        cy.get(el.SELECT_COURTESY_CAR).select('Yes').should('have.value', 'Yes')
        cy.get(el.BTN_NEXT_SELECT_PRICE_OPITION).click()

    }

    //função criada para preencher todos os campos da aba SelectPriceOption//
    preencherSelectPriceOption() {
        cy.get(el.SELECT_OPTION).check({ force: true }).should('have.value', 'Ultimate')
        cy.get(el.BTN_NEXT_SEND_QUOTE).click()

    }

    //função criada para preencher todos os campos da aba SendQuote//
    preencherSendQuote() {
        cy.get(el.INP_EMAIL).type('camilla.teste@gmail.com')
        cy.get(el.INP_PHONE).type('6288413482')
        cy.get(el.INP_USERNAME).type('testeCamilla')
        cy.get(el.INP_PASSWORD).type('Teste1234567')
        cy.get(el.INP_CONFIRM_PASSWORD).type('Teste1234567')
        cy.get(el.INP_COMMENTS).type('TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE ')
        cy.get(el.BTN_SEND).click()
        cy.wait(5000)
        cy.contains('Sending e-mail success!').should('be.visible')
        Cypress.on('uncaught:exception', () => {
            return false;
        });
    }

    //função criada para não preencher campos obrigatórios de todas as abas, sistema retorna mensagem de obrigatoriedade de preenchimento//
    validarCamposObrigatorios() {
        cy.get(el.BTN_NEXT_ENTER_VEHICLE_DATA).click()
        cy.get(el.BTN_NEXT_ENTER_PRODUCT_DATA).click()
        cy.get(el.BTN_NEXT_SELECT_PRICE_OPITION).click()
        cy.contains('Please, complete the first three steps to see the price table.').should('be.visible')
    }

    //função criada para preencher o campo Website com a formatação inválida, sistema reporta campo inválido //
    formatacaoInvalida() {
        cy.get(el.INP_FIRST_NAME).type('CAMIILLA')
        cy.get(el.INP_LAST_NAME).type('TORRES')
        cy.get(el.DATE_BIRTH).type('12/06/1998')
        cy.get(el.RADIO_GENDER).check({ force: true }).should('have.value', 'Female')
        cy.get(el.INP_STREET_ADDRESS).type('RUA 5, N.193, SETOR CENTRAL')
        cy.get(el.SELECT_COUNTRY).select('Brazil').should('have.value', 'Brazil')
        cy.get(el.INP_ZIP_CODE).type('75250004')
        cy.get(el.INP_CITY).type('GOIÂNIA')
        cy.get(el.SELECT_OCCUPATION).select('Selfemployed').should('have.value', 'Selfemployed')
        cy.get(el.CHECKBOX_HOBBIES_1).check({ force: true }).should('have.value', 'BungeeJumping')
        cy.get(el.CHECKBOX_HOBBIES_2).check({ force: true }).should('have.value', 'Skydiving')
        cy.get(el.INP_WEBSITE).type('teste@teste')
        cy.contains('Must be a valid URL').should('be.visible')
    }
}

export default new Formulario()

