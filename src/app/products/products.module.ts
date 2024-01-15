import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component';
import { CatalogoHomeComponent } from './pages/catalogo-home/catalogo-home.component';
import { ColeccionesPageComponent } from './pages/colecciones-page/colecciones-page.component';
import { NewInPageComponent } from './pages/new-in-page/new-in-page.component';
import { MadkatOnTourPageComponent } from './pages/madkat-on-tour-page/madkat-on-tour-page.component';
import { OriginalsPageComponent } from './pages/originals-page/originals-page.component';
import { HoodiesPageComponent } from './pages/hoodies-page/hoodies-page.component';
import { TShirtsPageComponent } from './pages/t-shirts-page/t-shirts-page.component';
import { AccessoriesPageComponent } from './pages/accessories-page/accessories-page.component';



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
    AccessoriesPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
