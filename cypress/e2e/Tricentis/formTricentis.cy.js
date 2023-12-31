/// <reference types="Cypress" />

import Formulario from '../../support/pages/Tricentis'

it('Acessar aplicação Tricentis', function () {
    Formulario.acessarURL()
})

it('preencher todos os campos do formulário e enviar', function () {
    Formulario.acessarURL()
    Formulario.preencherEnterVehicleData()
    Formulario.preencherEnterInsurantData()
    Formulario.preencherEnterProductData()
    Formulario.preencherSelectPriceOption()
    Formulario.preencherSendQuote()
})

it('exibe mensagem de erro ao tentar submeter o formulário sem preencher os campos obrigatórios', function () {
    Formulario.acessarURL()
    Formulario.validarCamposObrigatorios()

})

it('exibe mensagem de erro ao submeter o formulário com um site com formatação inválida', function () {
    Formulario.acessarURL()
    Formulario.preencherEnterVehicleData()
    Formulario.formatacaoInvalida()

})