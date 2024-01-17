import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-catalogo-home',
  templateUrl: './catalogo-home.component.html',
  styleUrls: ['./catalogo-home.component.scss'],
})
export class CatalogoHomeComponent {
  constructor(private navigate: Router) {}
  public catalogoInfo = [
    {
      id: 0,
      title: 'new in',
      src: 'assets/catalogo/MADKAT_newin.png',
      routerLink: 'newIn',
    },
    {
      id: 1,
      title: 'madkat on tour',
      src: 'assets/catalogo/MADKAT_madkatOnTour.png',
      routerLink: 'madkatOnTour',
    },
    {
      id: 2,
      title: 'originals',
      src: 'assets/catalogo/MADKAT_originals.png',
      routerLink: 'originals',
    },
    {
      id: 3,
      title: 'sudaderas',
      src: 'assets/catalogo/MADKAT_hoodies.png',
      routerLink: 'hoodies',
    },
    {
      id: 4,
      title: 'camisetas',
      src: 'assets/catalogo/MADKAT_tshirts.png',
      routerLink: 'tShirts',
    },
    {
      id: 5,
      title: 'accesorios',
      src: 'assets/catalogo/MADKAT_accesories.png',
      routerLink: 'accessories',
    },
  ]

  public navigateColection(params: string) {
    console.log(params)
    this.navigate.navigate([params])
  }
}
