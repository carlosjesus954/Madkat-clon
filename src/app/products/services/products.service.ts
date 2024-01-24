import { Injectable } from '@angular/core'
import { BehaviorSubject, pipe, tap } from 'rxjs'
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productoSeleccionado = new BehaviorSubject<Product | null>(null)
  productoSeleccionado$ = this.productoSeleccionado.asObservable()
  private carritoState = new BehaviorSubject<Product[]>([]) // Inicializa el carrito como un array vacío
  carritoActual$ = this.carritoState.asObservable()

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

  public actualizarCarrito(producto: Product, talla: string) {
    producto.talla = talla
    let currentCart = this.carritoState.value // Obtén el carrito actual
    currentCart.push(producto) // Añade el nuevo producto al carrito
    this.carritoState.next(currentCart) // Actualiza el estado del carrito
    console.log('SERVICIO CARRITO', currentCart)

    localStorage.setItem('carrito', JSON.stringify(currentCart))
  }
}
