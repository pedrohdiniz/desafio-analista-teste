import * as cpf from "@fnando/cpf";

Given(/^acesso o site de cadastro$/, () => {
	cy.visit('/')
});

When(/^preencho os campos$/, () => {
    cy.get('[id=InputNome1]').type('Teste')
    cy.get('[id=InputSobrenome1]').type('da Silva')
    cy.get('[id=InputEmail1]').type('teste@teste.com')
    cy.get('[id=InputSenha1]').type('A2b4C8h7')
    cy.get('[id=InputConfirmeSenha1]').type('A2b4C8h7')
    cy.get('[id=InputCpf1]').type(cpf.generate(true))
    cy.get('#RadioMasculino1').check({force: true})
    cy.get('[id=InputDataNascimento1]').type('05021988')
    cy.get('[id=InputCelular1]').type('81999999999')
    cy.get('[id=InputCep1]').type('51011010')
    cy.get('[id=InputNumero1]').click({force: true})
    cy.get('[id=InputNumero1]').type('148')
    cy.get('[id=InputTelefone1]').type('81999999999')
    cy.get('[id=FinalizarCadastro1]').click()
});

Then(/^completo meu cadastro$/, () => {
	return true;
});
