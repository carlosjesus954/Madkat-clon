import { Component } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { Router } from '@angular/router'
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-originals-page',
  templateUrl: './originals-page.component.html',
  styleUrls: ['./originals-page.component.scss'],
})
export class OriginalsPageComponent {
  public coleccion: string = 'originals'
  public catalogoOriginals = [
    {
      id: 0,
      title: 'Originals - Camiseta',
      coleccion: 'originals',
      precio: 24.99,
      src: 'assets/originals/ORIGINALS_0_1.jpg',
      src2: 'assets/originals/ORIGINALS_0_2.jpg',
      hovered: false,
      imgs: [
        'assets/originals/id-0/originals-carrusel-1.jpg',
        'assets/originals/id-0/originals-carrusel-2.jpg',
        'assets/originals/id-0/originals-carrusel-3.jpg',
      ],
      comment: 'Isabella mide 1,55 cm y lleva una talla XL',
      details: [
        '185 g/m',
        '100% Algodón',
        'Cuello canalé',
        'Doble costura en puños y dobladillo inferior',
        'Guía de tallas y recomendaciones de cuidado',
      ],
      cantidad: 0,
    },
    {
      id: 1,
      title: 'Originals - Camiseta',
      coleccion: 'originals',
      precio: 24.99,
      src: 'assets/originals/ORIGINALS_1_1.jpg',
      src2: 'assets/originals/ORIGINALS_1_2.jpg',
      hovered: false,
      imgs: [
        'assets/originals/id-1/originals-carrusel-1.jpg',
        'assets/originals/id-1/originals-carrusel-2.jpg',
        'assets/originals/id-1/originals-carrusel-3.jpg',
      ],
      comment: 'Isabella mide 1,55 cm y lleva una talla XL',
      details: [
        '185 g/m',
        '100% Algodón',
        'Cuello canalé',
        'Doble costura en puños y dobladillo inferior',
        'Guía de tallas y recomendaciones de cuidado',
      ],
      cantidad: 0,
    },
    {
      id: 2,
      title: 'Originals - Sudadera',
      coleccion: 'originals',
      precio: 39.99,
      src: 'assets/originals/ORIGINALS_2_1.jpg',
      src2: 'assets/originals/ORIGINALS_2_2.jpg',
      hovered: false,
      imgs: [
        'assets/originals/id-2/originals-carrusel-1.jpg',
        'assets/originals/id-2/originals-carrusel-2.jpg',
        'assets/originals/id-2/originals-carrusel-3.jpg',
      ],
      comment: 'Isabella mide 1,55 cm y lleva una talla XL',
      details: [
        '185 g/m',
        '100% Algodón',
        'Cuello canalé',
        'Doble costura en puños y dobladillo inferior',
        'Guía de tallas y recomendaciones de cuidado',
      ],
      cantidad: 0,
    },
    {
      id: 3,
      title: 'Originals - Sudadera',
      coleccion: 'originals',
      precio: 39.99,
      src: 'assets/originals/ORIGINALS_3_1.jpg',
      src2: 'assets/originals/ORIGINALS_3_2.jpg',
      hovered: false,
      imgs: [
        'assets/originals/id-3/originals-carrusel-1.jpg',
        'assets/originals/id-3/originals-carrusel-2.jpg',
        'assets/originals/id-3/originals-carrusel-3.jpg',
      ],
      comment: 'Isabella mide 1,55 cm y lleva una talla XL',
      details: [
        '185 g/m',
        '100% Algodón',
        'Cuello canalé',
        'Doble costura en puños y dobladillo inferior',
        'Guía de tallas y recomendaciones de cuidado',
      ],
      cantidad: 0,
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
