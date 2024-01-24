import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { Product } from '../../interfaces/product.interface'
import { filter } from 'rxjs'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-colecciones-page',
  templateUrl: './colecciones-page.component.html',
  styleUrls: ['./colecciones-page.component.scss'],
})
export class ColeccionesPageComponent implements OnInit {
  public productoSeleccionado: Product[] = [] // Inicializar como un array vacío
  public tallaSeleccionada: string = 'l'

  constructor(private productService: ProductsService) {}
  public tallasDisponibles: string[] = ['s', 'm', 'l', 'xl', 'xxl']
  ngOnInit(): void {
    this.productService.productoSeleccionado$.subscribe(producto => {
      if (producto) {
        this.productoSeleccionado = [producto] // Convertir el producto en un array
        console.log('colecciones', this.productoSeleccionado)
      }
    })
  }
  public selectTalla(talla: string) {
    this.tallaSeleccionada = talla
    console.log(this.tallaSeleccionada)
  }
  public addProduct(producto: Product) {
    console.log('COLECCIONES AÑADIR CESTA', producto)
    if (producto) {
      this.productService.actualizarCarrito(producto, this.tallaSeleccionada)
    }
  }
}
