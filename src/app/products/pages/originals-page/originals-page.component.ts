import { Component } from '@angular/core'

@Component({
  selector: 'app-originals-page',
  templateUrl: './originals-page.component.html',
  styleUrls: ['./originals-page.component.scss'],
})
export class OriginalsPageComponent {
  public coleccion: string = 'originals'
  public catalogoOriginals = [
    {
      id: 0,
      title: 'Originals - Camiseta',
      precio: 24.99,
      src: 'assets/originals/ORIGINALS_0_1.jpg',
      src2: 'assets/originals/ORIGINALS_0_2.jpg',
      hovered: false,
    },
    {
      id: 1,
      title: 'Originals - Camiseta',
      precio: 24.99,
      src: 'assets/originals/ORIGINALS_1_1.jpg',
      src2: 'assets/originals/ORIGINALS_1_2.jpg',
      hovered: false,
    },
    {
      id: 2,
      title: 'Originals - Sudadera',
      precio: 39.99,
      src: 'assets/originals/ORIGINALS_2_1.jpg',
      src2: 'assets/originals/ORIGINALS_2_2.jpg',
      hovered: false,
    },
    {
      id: 3,
      title: 'Originals - Sudadera',
      precio: 39.99,
      src: 'assets/originals/ORIGINALS_3_1.jpg',
      src2: 'assets/originals/ORIGINALS_3_2.jpg',
      hovered: false,
    },
  ]
}
