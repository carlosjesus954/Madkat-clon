import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { Product } from '../../interfaces/product.interface'
import { filter } from 'rxjs'

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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Accede al estado de la ruta después de que la navegación haya terminado
        const state = this.router.getCurrentNavigation()?.extras.state

        if (state && state['producto']) {
          this.productoSeleccionado = state['producto']
          console.log('COlecciones', this.productoSeleccionado)
        }
      })
  }
}
