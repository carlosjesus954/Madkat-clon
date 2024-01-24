import { Component } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { Router } from '@angular/router'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-new-in-page',
  templateUrl: './new-in-page.component.html',
  styleUrls: ['./new-in-page.component.scss'],
})
export class NewInPageComponent {
  public coleccion: string = 'new in'
  public catalogoNewIn = [
    {
      id: 0,
      title: 'Scratching Worldwide - Sudadera',
      precio: 39.99,
      src: 'assets/newIn/newIn-0.jpg',
      coleccion: 'newIn',
      imgs: [
        'assets/newIn/id-0/newIn-carrusel-4.jpg',
        'assets/newIn/id-0/newIn-carrusel-1.jpg',
        'assets/newIn/id-0/newIn-carrusel-2.jpg',
        'assets/newIn/id-0/newIn-carrusel-3.jpg',
      ],
      comment: 'Natalia mide 1,68 cm y lleva una talla XL',
      details: [
        '280 g/m², 80% algodón ring-spun y peinado, 20% poliéster',
        'Tejido de 3 capas',
        'Sisas, puños y bajo con tapa costura',
        'Guía de tallas y recomendaciones de cuidado',
      ],
    },
    {
      id: 1,
      title: 'MadKat Worldtour - Sudadera',
      precio: 39.99,
      src: 'assets/newIn/newIn-1.jpg',
      coleccion: 'newIn',
      imgs: [
        'assets/newIn/id-1/newIn-carrusel-1.jpg',
        'assets/newIn/id-1/newIn-carrusel-2.jpg',
        'assets/newIn/id-1/newIn-carrusel-3.jpg',
        'assets/newIn/id-1/newIn-carrusel-4.jpg',
      ],
      comment: 'Natalia mide 1,68 cm y lleva una talla XL',
      details: [
        '280 g/m², 80% algodón ring-spun y peinado, 20% poliéster',
        'Tejido de 3 capas',
        'Sisas, puños y bajo con tapa costura',
        'Guía de tallas y recomendaciones de cuidado',
      ],
    },
    {
      id: 2,
      title: 'Scratching Worldwide - Hoodie',
      precio: 42.99,
      src: 'assets/newIn/newIn-2.jpg',
      coleccion: 'newIn',
      imgs: [
        'assets/newIn/id-2/newIn-carrusel-1.jpg',
        'assets/newIn/id-2/newIn-carrusel-2.jpg',
        'assets/newIn/id-2/newIn-carrusel-3.jpg',
        'assets/newIn/id-2/newIn-carrusel-4.jpg',
      ],
      comment: 'Natalia mide 1,68 cm y lleva una talla XL',
      details: [
        '280 g/m², 80% algodón ring-spun y peinado, 20% poliéster',
        'Tejido de 3 capas',
        'Sisas, puños y bajo con tapa costura',
        'Guía de tallas y recomendaciones de cuidado',
      ],
    },
    {
      id: 3,
      title: 'Smiley Kat - Camiseta',
      precio: 26.99,
      src: 'assets/newIn/newIn-3.jpg',
      coleccion: 'newIn',
      imgs: [
        'assets/newIn/id-3/newIn-carrusel-1.jpg',
        'assets/newIn/id-3/newIn-carrusel-2.jpg',
        'assets/newIn/id-3/newIn-carrusel-3.jpg',
        'assets/newIn/id-3/newIn-carrusel-4.jpg',
      ],
      comment: 'Natalia mide 1,68 cm y lleva una talla XL',
      details: [
        '280 g/m², 80% algodón ring-spun y peinado, 20% poliéster',
        'Tejido de 3 capas',
        'Sisas, puños y bajo con tapa costura',
        'Guía de tallas y recomendaciones de cuidado',
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
