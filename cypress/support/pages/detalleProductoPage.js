class detalleProducto{

    agregarProducto(){
        cy.contains('Add to cart').click()
    }

}

module.exports = new detalleProducto();