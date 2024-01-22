import { Component } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { Router } from '@angular/router'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-t-shirts-page',
  templateUrl: './t-shirts-page.component.html',
  styleUrls: ['./t-shirts-page.component.scss'],
})
export class TShirtsPageComponent {
  public coleccion: string = 'sudaderas'
  public catalogoTshirts = [
    {
      id: 0,
      title: 'Scratching Worldwide - Camiseta Relaxed Fit',
      precio: 34.99,
      src: 'assets/tShirts/TSHIRTS_0_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_0_2.jpg',
      hovered: false,
    },
    {
      id: 1,
      title: 'Scratching Worldwide - Camiseta Relaxed Fit',
      precio: 34.99,
      src: 'assets/tShirts/TSHIRTS_1_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_1_2.jpg',
      hovered: false,
    },
    {
      id: 2,
      title: 'Smiley Kat - Camiseta',
      precio: 26.99,
      src: 'assets/tShirts/TSHIRTS_2_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_2_2.jpg',
      hovered: false,
    },
    {
      id: 3,
      title: 'Smiley Kat - Camiseta',
      precio: 26.99,
      src: 'assets/tShirts/TSHIRTS_3_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_3_2.jpg',
      hovered: false,
    },
  ]
  constructor(
    private router: Router,
    private productService: ProductsService,
  ) {}

  public selectedProduct(product: Product) {
    if (!product) return
    this.productService.actualizarProductoSeleccionado(product)
    this.router.navigateByUrl('/colecciones')
  }
}
