import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
  selector: 'app-layoutpage',
  templateUrl: './layoutpage.component.html',
  styleUrls: ['./layoutpage.component.scss'],
})
export class LayoutpageComponent {
  private menuVisible = new BehaviorSubject<boolean>(false)
  public menuVisible$: Observable<boolean> = this.menuVisible.asObservable()
  constructor(private route: Router) {}
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
      router: 'login',
    },
    {
      id: 2,
      title: 'Registrarse',
      router: 'register',
    },
  ]

  public mostrarMenu() {
    this.menuVisible.next(true)
  }
  public ocultarMenu(ruta?: string) {
    this.menuVisible.next(false)
    if (ruta) {
      this.route.navigateByUrl(`${ruta}`)
    }
  }
}
