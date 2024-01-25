import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productoSeleccionado = new BehaviorSubject<Product | null>(null)
  productoSeleccionado$ = this.productoSeleccionado.asObservable()
  private carritoState = new BehaviorSubject<Product[]>([]) // Inicializa el carrito como un array vacío
  carritoActual$ = this.carritoState.asObservable()

  public carritoShow = new BehaviorSubject<boolean>(false)
  carritoActivated$ = this.carritoShow.asObservable()

  constructor() {
    const storedCart = JSON.parse(localStorage.getItem('carrito') || '[]')
    const storedProduct = JSON.parse(
      localStorage.getItem('productoSeleccionado') || 'null',
    )
    this.carritoState.next(storedCart)
    this.productoSeleccionado.next(storedProduct)
  }

  public actualizarProductoSeleccionado(producto: Product) {
    this.productoSeleccionado.next(producto)
    localStorage.setItem('productoSeleccionado', JSON.stringify(producto))
  }

  public actualizarCarrito(productos: Product, talla?: string) {
    const productoAñadido = { ...productos }
    productoAñadido.talla = talla
    productoAñadido.cantidad = 1
    productoAñadido.precio = productoAñadido.precio * productoAñadido.cantidad // Recalcular el precio

    let currentCart = this.carritoState.value
    currentCart.push(productoAñadido) // Añadir el nuevo producto al carrito
    this.carritoState.next(currentCart) // Actualizar el estado del carrito
    console.log('SERVICIO CARRITO', this.carritoState.value)

    localStorage.setItem('carrito', JSON.stringify(currentCart))
  }
  public deleteProductoCarrito(producto: Product) {
    let carritoActual = this.carritoState.value
    carritoActual = carritoActual.filter(product => {
      return !(
        product.id === producto.id &&
        product.title === producto.title &&
        product.coleccion === producto.coleccion &&
        product.talla === producto.talla
      )
    })
    this.carritoState.next(carritoActual)
    localStorage.setItem('carrito', JSON.stringify(carritoActual))
  }
  public changeCarritoState() {
    this.carritoShow.next(!this.carritoShow.value)
  }
}
