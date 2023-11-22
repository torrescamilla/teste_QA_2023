/// <reference types="Cypress" />

import Inscricao from '../../support/pages/Einscricao'

it('Acessar aplicação E-Inscrição', function () {
    Inscricao.acessarURLeInscricao()

})

it('Adicionando ticket', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
})

it('Ver Detalhes', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.verDetalhes()
    Inscricao.ocultarDetalhes()
})

it('Criar conta e utilizar participante cadastrado', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.criarConta()
    Inscricao.selecionarParticipanteCadastrado()

})

it('Acessar com um usuário já cadastrado e utilizar participante cadastrado', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.acessarLogin()
    Inscricao.selecionarParticipanteCadastradoLogin()

})

it('Adicionado um novo participante', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.criarConta()
    Inscricao.adicionarNovoParticipante()

})

it('Remover participante já cadastrado e cadastrar um novo participante', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.acessarLogin()
    Inscricao.removerParticipante()
    Inscricao.adicionarNovoParticipante()

})

it('Acessar aplicação sem criar conta', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.semConta()

})

it('Testar funcionalidade do botão "Esqueci minha senha"', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.esqueciMinhaSenha()

})

it('Testar inserindo CPF inválido, sistema deve sinalizar', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.preencherCPFinvalido()
})

it('Testar inserindo email inválido, sistema deve sinalizar', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.preencherEmailInvalido()
})

it('Tentar criar conta sem preencher campos obrigatórios', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.NaoPreencherCamposObrigatorios()

})

it('Testar finalizando pedido e salvando comprovante', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.criarConta()
    Inscricao.selecionarParticipanteCadastrado()
    Inscricao.salvarComprovante()

})

it('Testar finalizando pedido e clicando em minhas aplicações', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.criarConta()
    Inscricao.selecionarParticipanteCadastrado()
    Inscricao.verMinhasInscricoes()

})

it('Testar avaliando experiência durante inscrição', function () {
    Inscricao.acessarURLeInscricao()
    Inscricao.adicionarTicket()
    Inscricao.criarConta()
    Inscricao.selecionarParticipanteCadastrado()
    Inscricao.avaliarExperiencia()
})





