import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productoSeleccionado = new BehaviorSubject<Product | null>(null)
  productoSeleccionado$ = this.productoSeleccionado.asObservable()
  constructor() {}
  public actualizarProductoSeleccionado(producto: Product) {
    this.productoSeleccionado.next(producto)
  }
}
