import { Component, OnInit } from '@angular/core'
import { Product } from '../../interfaces/product.interface'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  public carrito: Product[] = []
  constructor() {}
  ngOnInit(): void {}
}
