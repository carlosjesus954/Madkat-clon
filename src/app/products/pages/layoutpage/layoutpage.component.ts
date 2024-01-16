import { Component } from '@angular/core'

@Component({
  selector: 'app-layoutpage',
  templateUrl: './layoutpage.component.html',
  styleUrls: ['./layoutpage.component.scss'],
})
export class LayoutpageComponent {
  public titleHome = 'Home'
  public itemsNav = [
    {
      id: 0,
      title: 'New in',
      router: 'newIn',
    },
    {
      id: 1,
      title: 'Madkat on tour',
      router: 'madkatOnTour',
    },
    {
      id: 2,
      title: 'Originals',
      router: 'originals',
    },
    {
      id: 3,
      title: 'Sudaderas',
      router: 'hoodies',
    },
    {
      id: 4,
      title: 'Camisetas',
      router: 'tShirts',
    },
    {
      id: 5,
      title: 'Accesorios',
      router: 'accessories',
    },
  ]
  public itemsNavAuth = [
    {
      id: 0,
      title: 'Carrito',
      router: '',
    },
    {
      id: 1,
      title: 'Login',
      router: '',
    },
    {
      id: 2,
      title: 'Registrarse',
      router: '',
    },
  ]
}
