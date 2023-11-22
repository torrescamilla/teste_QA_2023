const Form = require('./elements').ELEMENTS
const faker = require('faker-br')

class Inscricao {
    
    //funçao criada para validar acesso à aplicação pela URL//
    acessarURLeInscricao() {
        cy.visit('https://checkout.einscricao.app/?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev')
        cy.title().should('be.equal', 'E-Inscrição')
    }

    //função criada para adicionar um ticket de inscrição//
    adicionarTicket() {
        cy.get(Form.BTN_ADD_TICKET).click()
        cy.get(Form.BTN_CONTINUAR).click()
        cy.contains('Crie sua conta para gerenciar suas ').should('be.visible')
    }

    //funçao criada para criar a conta de um novo usuário//
    criarConta() {
        cy.get(Form.BTN_CRIAR_CONTA).click()
        cy.get(Form.INP_NOME).type('Camilla Torres')
        cy.get(Form.INP_EMAIL_CRIAR_CONTA).type(faker.internet.email())
        cy.get(Form.SELECT_DOC).select('cpf').should('have.value', 'cpf')
        cy.get(Form.INP_NUMERO).type(faker.br.cpf())
        cy.get(Form.INP_SENHA_CRIAR_CONTA).type('Senha1')
        cy.get(Form.INP_CONFIRM_SENHA).type('Senha1')
        cy.get(Form.BTN_CRIAR_CONTA_FILL).click()
        cy.contains('Adicionar novo participante').should('be.visible')

    }

    //funçao criada para selecionar o participante recém-criado na tela de escolha do participante//
    selecionarParticipanteCadastrado() {
        cy.get(Form.SELECT_SELEC_PARTICIPANTE).click()
        cy.contains('Camilla Torres').click()
        cy.get(Form.BTN_FINALIZAR).click()
        cy.wait(2000)
        cy.contains('Pedido feito com sucesso!').should('be.visible')

    }

    //funçao criada para acessar a aplicação com um usuário já cadastrado//
    acessarLogin() {
        cy.get(Form.BTN_LOGIN).click()
        cy.get(Form.INP_EMAIL_LOGIN).type('camillatorres.jesus@gmail.com')
        cy.get(Form.INP_SENHA_LOGIN).type('Senha1')
        cy.get(Form.BTN_ENTRAR).click()

    }

    //funçao criada para selecionar o participante que realizou login na tela de escolha do participante//
    selecionarParticipanteCadastradoLogin() {
        cy.get(Form.SELECT_SELEC_PARTICIPANTE_LOGIN).click()
        cy.contains('Camilla Torres').click()
        cy.get(Form.SELECT_DOC_PARTICIPANTE_LOGIN).select('cpf').should('have.value', 'cpf')
        cy.get(Form.INP_NUMERO_PARTICIPANTE_LOGIN).clear().type(faker.br.cpf())
        cy.get(Form.BTN_FINALIZAR_LOGIN).click()
        cy.wait(2000)
        cy.contains('Pedido feito com sucesso!').should('be.visible')

    }

    //funçao criada para selecionar um novo participante e realizar o cadastro do mesmo na tela de escolha do participante//
    adicionarNovoParticipante() {
        cy.get(Form.BTN_ADD_NEW_PARTICIPANTE).click()
        cy.get(Form.INP_NOME_NEW_PARTICIPANTE).type('TESTE NOVO')
        cy.get(Form.INP_DOC_NEW_PARTICIPANTE).select('cpf').should('have.value', 'cpf')
        cy.get(Form.INP_NUMERO_NEW_PARTICIPANTE).type(faker.br.cpf())
        cy.get(Form.INP_EMAIL_NEW_PARTICIPANTE).type(faker.internet.email())
        cy.get(Form.BTN_FINALIZAR_NEW_PARTICIPANTE).click()
        cy.wait(2000)
        cy.contains('Pedido feito com sucesso!').should('be.visible')

    }

    //funçao criada para remover um participante anteriormente selecionado na tela de escolha do participante//
    removerParticipante() {
        cy.get(Form.SELECT_SELEC_PARTICIPANTE_LOGIN).click()
        cy.contains('Camilla Torres').click()
        cy.get(Form.BTN_LIXEIRA).click()
    }

    //funçao criada para acessar a aplicação com um usuário sem conta/cadastro//
    semConta() {
        cy.get(Form.BTN_CONTINUAR_SEM_CONTA).click()
        cy.get(Form.INP_NOME_SEM_CONTA).type('USUARIO SEM CONTA')
        cy.get(Form.INP_DOC_SEM_CONTA).select('cpf').should('have.value', 'cpf')
        cy.get(Form.INP_NUMERO_SEM_CONTA).type(faker.br.cpf())
        cy.get(Form.INP_EMAIL_SEM_CONTA).type(faker.internet.email())
        cy.get(Form.BTN_FINALIZAR).click()
        cy.wait(2000)
        cy.contains('Pedido feito com sucesso!').should('be.visible')
    }

    //funçao criada para validar funcionalidade do botão esqueci minha senha//
    //Validação feita apenas manualmente, cypress não tem suporte para validar email recebido//
    esqueciMinhaSenha(){
        cy.get(Form.BTN_LOGIN).click()
        cy.get(Form.INP_EMAIL_LOGIN).type('camillatorres.jesus@gmail.com')
        cy.get(Form.INP_SENHA_LOGIN).type('Senha1')
        cy.get(Form.BTN_ESQUECI_MINHA_SENHA).click()
        cy.get(Form.INP_EMAIL_ESQUECI_MINHA_SENHA).type('camillatorres.jesus@gmail.com')
        cy.get(Form.BTN_ENVIAR_EMAIL).click()

    }

    //funçao criada para testar o preenchimento do formulário com um CPF inválido, sistema deve informar que o CPF é inválido//
    preencherCPFinvalido() {
        cy.get(Form.BTN_CRIAR_CONTA).click()
        cy.get(Form.INP_NOME).type('Camilla Torres')
        cy.get(Form.INP_EMAIL_CRIAR_CONTA).type(faker.internet.email())
        cy.get(Form.SELECT_DOC).select('cpf').should('have.value', 'cpf')
        cy.get(Form.INP_NUMERO_INVALIDO).type('12345678311')
        cy.contains('cpf inválido').should('be.visible')
    }

    //funçao criada para testar o preenchimento do formulário com um email inválido, sistema deve informar que o email é inválido//
    preencherEmailInvalido() {
        cy.get(Form.BTN_CRIAR_CONTA).click()
        cy.get(Form.INP_NOME).type('Camilla Torres')
        cy.get(Form.INP_EMAIL_INVALIDO).type('teste#teste.com')
        cy.get(Form.INP_NUMERO).click()
        cy.contains('Email inválido').should('be.visible')

    }

    //funçao criada para validar mensagem de obrigatoriedade de preenchimento dos campos obrigatórios//
    NaoPreencherCamposObrigatorios() {
        cy.get(Form.BTN_CRIAR_CONTA).click()
        cy.get(Form.BTN_CRIAR_CONTA_FILL).click()
        cy.contains('Nome é obrigatório').should('be.visible')
        cy.contains('Email é obrigatório').should('be.visible')
        cy.contains('Tipo de documento é obrigatório').should('be.visible')
        cy.contains('Documento é obrigatório').should('be.visible')
        cy.contains('Senha é obrigatório').should('be.visible')
        cy.contains('Senha não confere').should('be.visible')

    }

    //funçao criada para testar a funcionalidade do botão Salvar Comporovante//
    //Validação feita apenas manualmente, cypress não tem suporte para visualizar download realizado//
    salvarComprovante() {
        cy.get(Form.BTN_SALVAR_COMPROVANTE).click()
        cy.wait(3000)

    }

    //funçao criada para testar a funcionalidade do botão Ver Minhas Inscrições//
    //Validação feita apenas manualmente, cypress não tem suporte para outra aba no navegador//
    verMinhasInscricoes() {
        cy.get(Form.BTN_VER_MINHAS_INSCRICOES).click()
        cy.wait(1000)
    }

    //funçao criada para validar a avaliação ao preencher formuláro//
    avaliarExperiencia() {
        cy.get(Form.BTN_HAPPY_AVALIACAO).click()
        cy.contains('Obrigado por compartilhar sua experiência conosco!').should('be.visible')
    }
}

export default new Inscricao()