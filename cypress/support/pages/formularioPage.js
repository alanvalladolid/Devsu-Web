class formulario{

    completarFormulario(){
        cy.fixture('infoCliente').then((infoCliente) => {
            cy.get('#name').type(infoCliente.name)
            cy.get('#country').type(infoCliente.country)
            cy.get('#city').type(infoCliente.city)
            cy.get('#card').type(infoCliente.creditCard)
            cy.get('#month').type(infoCliente.month)
            cy.get('#year').type(infoCliente.year)
          })
    }

    clickConfirmar(){
        cy.contains("Purchase").click()
        cy.wait(3000)
    }

    verificarMensaje(){
        cy.get('.sweet-alert').should('contain', "Thank you for your purchase!")
    }

    verificarDatos(){
        cy.fixture('infoCliente').then((infoCliente) => {
            cy.get('.lead').should('contain', infoCliente.name)
            cy.contains("Card Number:").should('contain', infoCliente.creditCard)
          })
    }

    clickOK(){
        cy.get('.confirm').click()
    }

}

module.exports = new formulario();