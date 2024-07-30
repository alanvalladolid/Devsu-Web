class home{

    seleccionarProductoUno(){
        cy.fixture('productos').then((productos) => {
            cy.contains(productos.productoUno).click()
          })
    }

    seleccionarProductoDos(){
    cy.fixture('productos').then((productos) => {
        cy.contains(productos.productoDos).click()
      })
    }

    clickHome(){
      cy.contains('Home').click()
    }

    clickCart(){
      cy.get('#cartur').click()
    }
}

module.exports = new home();
