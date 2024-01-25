import { Component } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { Router } from '@angular/router'
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-hoodies-page',
  templateUrl: './hoodies-page.component.html',
  styleUrls: ['./hoodies-page.component.scss'],
})
export class HoodiesPageComponent {
  public coleccion: string = 'sudaderas'
  public catalogoHoodies = [
    {
      id: 0,
      title: 'Fck the Ratz - Hoodie Oversized',
      precio: 55.99,
      src: 'assets/hoodies/HOODIES_0_1.jpg',
      src2: 'assets/hoodies/HOODIES_0_2.jpg',
      hovered: false,
      coleccion: 'hoodies',
      imgs: [
        'assets/hoodies/id-0/hoodies-carrusel-1.jpg',
        'assets/hoodies/id-0/hoodies-carrusel-2.jpg',
        'assets/hoodies/id-0/hoodies-carrusel-3.jpg',
        'assets/hoodies/id-0/hoodies-carrusel-4.jpg',
      ],
      comment: 'Eduardo mide 1,78 cm y lleva una talla XL',
      details: [
        '460 g/m, 100% algodón loopback terry',
        'Bolsillo canguro',
        'Guía de tallas y recomendaciones de cuidado',
      ],
      cantidad: 0,
    },
    {
      id: 1,
      title: 'Fck the Ratz - Hoodie',
      precio: 42.99,
      src: 'assets/hoodies/HOODIES_1_1.jpg',
      src2: 'assets/hoodies/HOODIES_1_2.jpg',
      hovered: false,
      coleccion: 'hoodies',
      imgs: [
        'assets/hoodies/id-1/hoodies-carrusel-1.jpg',
        'assets/hoodies/id-1/hoodies-carrusel-2.jpg',
        'assets/hoodies/id-1/hoodies-carrusel-3.jpg',
        'assets/hoodies/id-1/hoodies-carrusel-4.jpg',
      ],
      comment: 'Eduardo mide 1,78 cm y lleva una talla XL',
      details: [
        '460 g/m, 100% algodón loopback terry',
        'Bolsillo canguro',
        'Guía de tallas y recomendaciones de cuidado',
      ],
      cantidad: 0,
    },
    {
      id: 2,
      title: 'Fck the Ratz - Hoodie Oversized',
      precio: 55.99,
      src: 'assets/hoodies/HOODIES_2_1.jpg',
      src2: 'assets/hoodies/HOODIES_2_2.jpg',
      hovered: false,
      coleccion: 'hoodies',
      imgs: [
        'assets/hoodies/id-2/hoodies-carrusel-1.jpg',
        'assets/hoodies/id-2/hoodies-carrusel-2.jpg',
        'assets/hoodies/id-2/hoodies-carrusel-3.jpg',
        'assets/hoodies/id-2/hoodies-carrusel-4.jpg',
      ],
      comment: 'Eduardo mide 1,78 cm y lleva una talla XL',
      details: [
        '460 g/m, 100% algodón loopback terry',
        'Bolsillo canguro',
        'Guía de tallas y recomendaciones de cuidado',
      ],
      cantidad: 0,
    },
    {
      id: 3,
      title: 'Scratching Worldwide - Sudadera',
      precio: 39.99,
      src: 'assets/hoodies/HOODIES_3_1.jpg',
      src2: 'assets/hoodies/HOODIES_3_2.jpg',
      hovered: false,
      coleccion: 'hoodies',
      imgs: [
        'assets/hoodies/id-3/hoodies-carrusel-1.jpg',
        'assets/hoodies/id-3/hoodies-carrusel-2.jpg',
        'assets/hoodies/id-3/hoodies-carrusel-3.jpg',
        'assets/hoodies/id-3/hoodies-carrusel-4.jpg',
      ],
      comment: 'Eduardo mide 1,78 cm y lleva una talla XL',
      details: [
        '460 g/m, 100% algodón loopback terry',
        'Bolsillo canguro',
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
