import { Component } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { Router } from '@angular/router'
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-madkat-on-tour-page',
  templateUrl: './madkat-on-tour-page.component.html',
  styleUrls: ['./madkat-on-tour-page.component.scss'],
})
export class MadkatOnTourPageComponent {
  public coleccion: string = 'madkat on tour'
  public catalogoMadkatOnTour = [
    {
      id: 0,
      title: 'Fck the Ratz - Camiseta',
      precio: 26.99,
      src: 'assets/madkatOnTour/MADKAT_0_1.jpg',
      src2: 'assets/madkatOnTour/MADKAT_0_2.jpg',
      hovered: false,
    },
    {
      id: 1,
      title: 'Fck the Ratz - Camiseta',
      precio: 26.99,
      src: 'assets/madkatOnTour/MADKAT_1_1.jpg',
      src2: 'assets/madkatOnTour/MADKAT_1_2.jpg',
      hovered: false,
    },
    {
      id: 2,
      title: 'Fck the Ratz - Camiseta',
      precio: 26.99,
      src: 'assets/madkatOnTour/MADKAT_2_1.jpg',
      src2: 'assets/madkatOnTour/MADKAT_2_2.jpg',
      hovered: false,
    },
    {
      id: 3,
      title: 'Fck the Ratz - Hoodie Oversized',
      precio: 55.99,
      src: 'assets/madkatOnTour/MADKAT_3_1.jpg',
      src2: 'assets/madkatOnTour/MADKAT_3_2.jpg',
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
