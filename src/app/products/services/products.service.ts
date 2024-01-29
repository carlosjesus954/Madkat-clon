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

  public actualizarCarrito(producto: Product, talla?: string) {
    let currentCart = this.carritoState.value
    const productoExistenteIndex = currentCart.findIndex(
      item =>
        item.id === producto.id &&
        item.title === producto.title &&
        item.coleccion === producto.coleccion &&
        item.talla === talla,
    )

    if (productoExistenteIndex !== -1) {
      // Si el producto ya existe en el carrito, aumentar su cantidad
      currentCart[productoExistenteIndex].cantidad += 1
      currentCart[productoExistenteIndex].precioTotal =
        currentCart[productoExistenteIndex].precio *
        currentCart[productoExistenteIndex].cantidad
    } else {
      // Si el producto no existe en el carrito, agregarlo
      const productoAñadido = { ...producto }
      productoAñadido.talla = talla
      productoAñadido.cantidad = 1 // Establecer cantidad en 1 si no está definida
      productoAñadido.precioTotal =
        productoAñadido.precio * productoAñadido.cantidad
      currentCart.push(productoAñadido)
    }

    this.carritoState.next(currentCart) // Actualizar el estado del carrito
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
