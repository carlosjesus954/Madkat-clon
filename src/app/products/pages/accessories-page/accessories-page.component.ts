import { Component } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { Router } from '@angular/router'
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-accessories-page',
  templateUrl: './accessories-page.component.html',
  styleUrls: ['./accessories-page.component.scss'],
})
export class AccessoriesPageComponent {
  public coleccion: string = 'accesorios'
  public catalogoMadkatOnTour = [
    {
      id: 0,
      title: 'Mad Socks',
      precio: 26.99,
      src: 'assets/accesories/ACCESORIES_0_1.png',
      src2: 'assets/accesories/ACCESORIES_0_2.png',
      hovered: false,
      coleccion: 'accesories',
      imgs: [
        'assets/accesories/id-0/a-c-1.png',
        'assets/accesories/id-0/a-c-2.png',
        'assets/accesories/id-0/a-c-3.png',
        'assets/accesories/id-0/a-c-4.png',
        'assets/accesories/id-0/a-c-5.png',
        'assets/accesories/id-0/a-c-6.png',
      ],
      comment: 'Detalles del producto',
      details: [
        '76% Algodón, 20% Polyester and 4% Espandex',
        '3 pares de calcetines de estilo atlético',
        'Talla única',
        'Este producto no admite devolución',
      ],
    },
    {
      id: 1,
      title: 'Originals - Beanie',
      precio: 19.99,
      src: 'assets/accesories/ACCESORIES_1_1.png',
      src2: 'assets/accesories/ACCESORIES_1_2.png',
      hovered: false,
      coleccion: 'accesories',
      imgs: [
        'assets/accesories/id-1/a-c-1.png',
        'assets/accesories/id-1/a-c-2.png',
        'assets/accesories/id-1/a-c-3.jpg',
      ],
      comment: 'Detalles del producto',
      details: [
        '50% poliacrílico reciclado/ 50% poliacrílico',
        'Hilo duradero y de alta calidad',
        'Logo bordado',
        'Gorro con bordes doblados.',
        'Doble grosor.',
      ],
    },
    {
      id: 2,
      title: 'Drift MADKAT XL - Extended Gaming Mousepad',
      precio: 29.99,
      src: 'assets/accesories/ACCESORIES_2_1.png',
      src2: 'assets/accesories/ACCESORIES_2_2.png',
      hovered: false,
      coleccion: 'accesories',
      imgs: [
        'assets/accesories/id-2/a-c-1.png',
        'assets/accesories/id-2/a-c-2.png',
        'assets/accesories/id-2/a-c-3.jpg',
        'assets/accesories/id-2/a-c-4.jpg',
        'assets/accesories/id-2/a-c-5.jpg',
      ],
      comment: 'Detalles del producto',
      details: [
        'Drift MADKAT XL es una alfombrilla extra grande',
        'Materiales premium',
      ],
    },
    {
      id: 3,
      title: 'RUBIUS PREMIUM GAMING CHAIR feat. DRIFT',
      precio: 390.99,
      src: 'assets/accesories/ACCESORIES_3_1.png',
      src2: 'assets/accesories/ACCESORIES_3_2.png',
      hovered: false,
      coleccion: 'accesories',
      imgs: [
        'assets/accesories/id-3/a-c-1.png',
        'assets/accesories/id-3/a-c-2.png',
        'assets/accesories/id-3/a-c-3.jpg',
        'assets/accesories/id-3/a-c-4.jpg',
      ],
      comment: 'Detalles del producto',
      details: [
        'Producto oficial Rubius',
        'Mecanismo Frog',
        'Materiales de alta calidad',
        'Acabados en ante y PU premium',
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
