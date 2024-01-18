import { Component } from '@angular/core'

@Component({
  selector: 'app-accessories-page',
  templateUrl: './accessories-page.component.html',
  styleUrls: ['./accessories-page.component.scss'],
})
export class AccessoriesPageComponent {
  public coleccion: string = 'accesorios'
  public catalogoMadkatOnTour = [
    {
      id: 0,
      title: 'Mad Socks',
      precio: 26.99,
      src: 'assets/accesories/ACCESORIES_0_1.png',
      src2: 'assets/accesories/ACCESORIES_0_2.png',
      hovered: false,
    },
    {
      id: 1,
      title: 'Originals - Beanie',
      precio: 19.99,
      src: 'assets/accesories/ACCESORIES_1_1.png',
      src2: 'assets/accesories/ACCESORIES_1_2.png',
      hovered: false,
    },
    {
      id: 2,
      title: 'Drift MADKAT XL - Extended Gaming Mousepad',
      precio: 29.99,
      src: 'assets/accesories/ACCESORIES_2_1.png',
      src2: 'assets/accesories/ACCESORIES_2_2.png',
      hovered: false,
    },
    {
      id: 3,
      title: 'RUBIUS PREMIUM GAMING CHAIR feat. DRIFT',
      precio: 390.9,
      src: 'assets/accesories/ACCESORIES_3_1.png',
      src2: 'assets/accesories/ACCESORIES_3_2.png',
      hovered: false,
    },
  ]
}
