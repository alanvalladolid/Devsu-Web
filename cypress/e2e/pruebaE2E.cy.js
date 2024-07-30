import homepage from '../support/pages/homepage'
import detalleProductoPage from '../support/pages/detalleProductoPage'
import carritoPage from '../support/pages/carritoPage'
import formularioPage from '../support/pages/formularioPage'

describe('Prueba E2E', () => {
  it('Prueba E2E de un flujo de compra', () => {
    cy.visit('/')

    //Seleccionar producto 1
    homepage.seleccionarProductoUno()

    //Agregar producto 1 al carrito
    detalleProductoPage.agregarProducto()

    //Regresar al Home
    homepage.clickHome()

    //Seleccionar producto 2
    homepage.seleccionarProductoDos()

    //Agregar producto 2 al carrito
    detalleProductoPage.agregarProducto()

    //Visulaizar el carrito
    homepage.clickCart()

    //Verificar producto 1 en el carrito
    carritoPage.verificarProductoUno()

    //Verificar producto 2 en el carrito
    carritoPage.verificarProductoDos()

    //Iniciar compra de productos
    carritoPage.iniciarCompra()

    //Completar el formulario de compra
    formularioPage.completarFormulario()

    //Confirmar compra de productos
    formularioPage.clickConfirmar()

    //Verificar mensaje exitoso
    formularioPage.verificarMensaje()

    //Verificar datos del cliente
    formularioPage.verificarDatos()
    
    //Cerrar confirmacion de compra de productos
    formularioPage.clickOK()
  })
})