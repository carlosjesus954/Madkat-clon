import { Injectable } from '@angular/core'
import { BehaviorSubject, pipe, tap } from 'rxjs'
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productoSeleccionado = new BehaviorSubject<Product | null>(null)
  productoSeleccionado$ = this.productoSeleccionado.asObservable()
  privateCarritoState = new BehaviorSubject<Product[] | null>(null)
  carritoActual$ = this.privateCarritoState.asObservable()
  constructor() {}
  public actualizarProductoSeleccionado(producto: Product) {
    this.productoSeleccionado.next(producto)
  }
  public actualizarCarrito(producto: Product, talla: string) {
    producto.talla = talla
    this.privateCarritoState.next([producto])
    console.log('SERVICIO CARRITO', producto)
  }
}
