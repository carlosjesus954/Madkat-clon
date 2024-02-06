import { Component, OnInit, Pipe } from '@angular/core'
import { ProductsService } from '../../services/products.service'
import { Product } from '../../interfaces/product.interface'
import { Price } from '../../interfaces/price.interface'
import { AuthService } from 'src/app/auth/services/auth.service'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-carrito-page',
  templateUrl: './carrito-page.component.html',
  styleUrls: ['./carrito-page.component.scss'],
  providers: [MessageService],
})
export class CarritoPageComponent implements OnInit {
  public carritoActual: Product[] = []
  public precioTotal: Price | null = null
  public loginToken: boolean = false
  constructor(
    private productService: ProductsService,
    private authService: AuthService,
    private route: Router,
    private messageService: MessageService,
  ) {}
  ngOnInit(): void {
    this.productService.carritoActual$.subscribe(product => {
      this.carritoActual = product
      this.productService.calculosCarrito(this.carritoActual)
      console.log('carro', this.carritoActual)
    })
    this.productService.precioTotal$.subscribe(price => {
      this.precioTotal = price
    })
    this.authService.loginToken$.subscribe(log => {
      this.loginToken = log
    })
  }

  public order(carrito: Product[]) {
    console.log('pedido', carrito)
    if (!this.loginToken) {
      this.route.navigateByUrl('/login')
      alert('Necesitas estar logeado para realizar un pedido')
    } else {
      this.show()
      setTimeout(() => {
        this.productService.resetearCarrito()
      }, 3000)
    }
  }
  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    })
  }
  public deleteProduct(product: Product) {
    this.productService.deleteProductoCarrito(product)
  }
}
