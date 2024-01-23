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
  public coleccion: string = 'camiseta'
  public catalogoTshirts = [
    {
      id: 0,
      title: 'Scratching Worldwide - Camiseta Relaxed Fit',
      precio: 34.99,
      src: 'assets/tShirts/TSHIRTS_0_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_0_2.jpg',
      hovered: false,
      coleccion: 'tShirts',
      imgs: [
        'assets/tShirts/id-0/tshirts-carrusel-1.jpg',
        'assets/tShirts/id-0/tshirts-carrusel-2.jpg',
        'assets/tShirts/id-0/tshirts-carrusel-3.jpg',
        'assets/tShirts/id-0/tshirts-carrusel-4.jpg',
      ],
    },
    {
      id: 1,
      title: 'Scratching Worldwide - Camiseta Relaxed Fit',
      precio: 34.99,
      src: 'assets/tShirts/TSHIRTS_1_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_1_2.jpg',
      hovered: false,
      coleccion: 'tShirts',
      imgs: [
        'assets/tShirts/id-1/tshirts-carrusel-1.jpg',
        'assets/tShirts/id-1/tshirts-carrusel-2.jpg',
        'assets/tShirts/id-1/tshirts-carrusel-3.jpg',
        'assets/tShirts/id-1/tshirts-carrusel-4.jpg',
      ],
    },
    {
      id: 2,
      title: 'Smiley Kat - Camiseta',
      precio: 26.99,
      src: 'assets/tShirts/TSHIRTS_2_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_2_2.jpg',
      hovered: false,
      coleccion: 'tShirts',
      imgs: [
        'assets/tShirts/id-2/tshirts-carrusel-1.jpg',
        'assets/tShirts/id-2/tshirts-carrusel-2.jpg',
        'assets/tShirts/id-2/tshirts-carrusel-3.jpg',
        'assets/tShirts/id-2/tshirts-carrusel-4.jpg',
      ],
    },
    {
      id: 3,
      title: 'Smiley Kat - Camiseta',
      precio: 26.99,
      src: 'assets/tShirts/TSHIRTS_3_1.jpg',
      src2: 'assets/tShirts/TSHIRTS_3_2.jpg',
      hovered: false,
      coleccion: 'tShirts',
      imgs: [
        'assets/tShirts/id-3/tshirts-carrusel-1.jpg',
        'assets/tShirts/id-3/tshirts-carrusel-2.jpg',
        'assets/tShirts/id-3/tshirts-carrusel-3.jpg',
        'assets/tShirts/id-3/tshirts-carrusel-4.jpg',
      ],
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
