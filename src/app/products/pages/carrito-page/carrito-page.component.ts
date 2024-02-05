import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../../services/products.service'
import { Product } from '../../interfaces/product.interface'
import { Price } from '../../interfaces/price.interface'

@Component({
  selector: 'app-carrito-page',
  templateUrl: './carrito-page.component.html',
  styleUrls: ['./carrito-page.component.scss'],
})
export class CarritoPageComponent implements OnInit {
  public carritoActual: Product[] = []
  public precioTotal: Price | null = null
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.carritoActual$.subscribe(product => {
      this.carritoActual = product
      this.productService.calculosCarrito(this.carritoActual)
    })
    this.productService.precioTotal$.subscribe(price => {
      this.precioTotal = price
    })
  }
}
