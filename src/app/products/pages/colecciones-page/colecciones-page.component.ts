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
  public productoSeleccionado: Product = {
    id: -1,
    title: '',
    precio: 0,
    src: '',
    coleccion: '',
    imgs: [],
  }
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.productoSeleccionado$.subscribe(producto => {
      if (producto) {
        this.productoSeleccionado = producto
        console.log('colecciones', producto)
      }
    })
  }
}
