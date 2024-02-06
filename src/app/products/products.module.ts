import { NgModule } from '@angular/core'

import { AccessoriesPageComponent } from './pages/accessories-page/accessories-page.component'
import { CatalogoHomeComponent } from './pages/catalogo-home/catalogo-home.component'
import { ColeccionesPageComponent } from './pages/colecciones-page/colecciones-page.component'
import { CommonModule } from '@angular/common'
import { HoodiesPageComponent } from './pages/hoodies-page/hoodies-page.component'
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component'
import { MadkatOnTourPageComponent } from './pages/madkat-on-tour-page/madkat-on-tour-page.component'
import { NewInPageComponent } from './pages/new-in-page/new-in-page.component'
import { OriginalsPageComponent } from './pages/originals-page/originals-page.component'
import { ProductsRoutingModule } from './products-routing.module'
import { TShirtsPageComponent } from './pages/t-shirts-page/t-shirts-page.component'
import { PrimeNgModule } from '../prime-ng/prime-ng.module'
import { FooterComponent } from './components/footer/footer.component'
import { FormsModule } from '@angular/forms'
import { CarritoComponent } from './components/carrito/carrito.component'
import { RoundNumberPipe } from './pipes/round-number.pipe'
import { CarritoPageComponent } from './pages/carrito-page/carrito-page.component'
import { AuthModule } from '../auth/auth.module'

@NgModule({
  declarations: [
    LayoutpageComponent,
    CatalogoHomeComponent,
    ColeccionesPageComponent,
    NewInPageComponent,
    MadkatOnTourPageComponent,
    OriginalsPageComponent,
    HoodiesPageComponent,
    TShirtsPageComponent,
    AccessoriesPageComponent,
    FooterComponent,
    CarritoComponent,
    RoundNumberPipe,
    CarritoPageComponent,
  ],

  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    FormsModule,
    AuthModule,
  ],
  exports: [ProductsRoutingModule],
})
export class ProductsModule {}
