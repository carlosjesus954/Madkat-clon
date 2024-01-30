import { Component, OnInit } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  public carrito: Product[] = []
  public precioTotal: number = 0
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.carritoActual$.subscribe(product => {
      this.carrito = product
      this.productService.calculosCarrito(this.carrito)
    })
    this.productService.precioTotal$.subscribe(price => {
      this.precioTotal = price
    })
  }
  public deleteProduct(product: Product) {
    this.productService.deleteProductoCarrito(product)
  }
  public chageCarritoStatus() {
    this.productService.changeCarritoState()
  }
  isNotLast(index: number): boolean {
    return index < this.carrito.length - 1
  }
}
