import { Component } from '@angular/core'

@Component({
  selector: 'app-new-in-page',
  templateUrl: './new-in-page.component.html',
  styleUrls: ['./new-in-page.component.scss'],
})
export class NewInPageComponent {
  public coleccion: string = 'new in'
  public catalogoNewIn = [
    {
      id: 0,
      title: 'Scratching Worldwide - Sudadera',
      precio: 39.99,
      src: 'assets/newIn/newIn-0.jpg',
    },
    {
      id: 1,
      title: 'MadKat Worldtour - Sudadera',
      precio: 39.99,
      src: 'assets/newIn/newIn-1.jpg',
    },
    {
      id: 2,
      title: 'Scratching Worldwide - Hoodie',
      precio: 42.99,
      src: 'assets/newIn/newIn-2.jpg',
    },
    {
      id: 3,
      title: 'Smiley Kat - Camiseta',
      precio: 26.99,
      src: 'assets/newIn/newIn-3.jpg',
    },
  ]
}
