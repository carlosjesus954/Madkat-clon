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
  public coleccion: string = 'madkat on tour'
  public catalogoHoodies = [
    {
      id: 0,
      title: 'Fck the Ratz - Hoodie Oversized',
      precio: 55.99,
      src: 'assets/hoodies/HOODIES_0_1.jpg',
      src2: 'assets/hoodies/HOODIES_0_2.jpg',
      hovered: false,
    },
    {
      id: 1,
      title: 'Fck the Ratz - Hoodie',
      precio: 42.99,
      src: 'assets/hoodies/HOODIES_1_1.jpg',
      src2: 'assets/hoodies/HOODIES_1_2.jpg',
      hovered: false,
    },
    {
      id: 2,
      title: 'Fck the Ratz - Hoodie Oversized',
      precio: 55.99,
      src: 'assets/hoodies/HOODIES_2_1.jpg',
      src2: 'assets/hoodies/HOODIES_2_2.jpg',
      hovered: false,
    },
    {
      id: 3,
      title: 'Scratching Worldwide - Sudadera',
      precio: 39.99,
      src: 'assets/hoodies/HOODIES_3_1.jpg',
      src2: 'assets/hoodies/HOODIES_3_2.jpg',
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
