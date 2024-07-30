class carrito{

    verificarProductoUno(){
        cy.fixture('productos').then((productos) => {
            cy.get('.success').should('contain', productos.productoUno)
          })
    }

    verificarProductoDos(){
        cy.fixture('productos').then((productos) => {
            cy.get('.success').should('contain', productos.productoDos)
          })
    }

    iniciarCompra(){
        cy.contains('Place Order').click()
    }

}

module.exports = new carrito();