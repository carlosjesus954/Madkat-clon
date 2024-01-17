import { Component } from '@angular/core'

@Component({
  selector: 'app-catalogo-home',
  templateUrl: './catalogo-home.component.html',
  styleUrls: ['./catalogo-home.component.scss'],
})
export class CatalogoHomeComponent {
  public catalogoInfo = [
    {
      id: 0,
      title: 'new in',
      src: 'assets/catalogo/MADKAT_newin.png',
    },
    {
      id: 1,
      title: 'madkat on tour',
      src: 'assets/catalogo/MADKAT_madkatOnTour.png',
    },
    {
      id: 2,
      title: 'originals',
      src: 'assets/catalogo/MADKAT_originals.png',
    },
    {
      id: 3,
      title: 'sudaderas',
      src: 'assets/catalogo/MADKAT_hoodies.png',
    },
    {
      id: 4,
      title: 'camisetas',
      src: 'assets/catalogo/MADKAT_tshirts.png',
    },
    {
      id: 5,
      title: 'accesorios',
      src: 'assets/catalogo/MADKAT_accesories.png',
    },
  ]
}
