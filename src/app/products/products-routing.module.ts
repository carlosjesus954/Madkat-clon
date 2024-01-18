import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component'
import { CatalogoHomeComponent } from './pages/catalogo-home/catalogo-home.component'
import { NewInPageComponent } from './pages/new-in-page/new-in-page.component'
import { MadkatOnTourPageComponent } from './pages/madkat-on-tour-page/madkat-on-tour-page.component'
import { OriginalsPageComponent } from './pages/originals-page/originals-page.component'
import { HoodiesPageComponent } from './pages/hoodies-page/hoodies-page.component'
import { TShirtsPageComponent } from './pages/t-shirts-page/t-shirts-page.component'
import { AccessoriesPageComponent } from './pages/accessories-page/accessories-page.component'
import { ColeccionesPageComponent } from './pages/colecciones-page/colecciones-page.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutpageComponent,
    children: [
      {
        path: 'catalagoPage',
        component: CatalogoHomeComponent,
      },
      {
        path: 'newIn',
        component: NewInPageComponent,
      },
      {
        path: 'madkatOnTour',
        component: MadkatOnTourPageComponent,
      },
      {
        path: 'originals',
        component: OriginalsPageComponent,
      },
      {
        path: 'hoodies',
        component: HoodiesPageComponent,
      },
      {
        path: 'tShirts',
        component: TShirtsPageComponent,
      },
      {
        path: 'accessories',
        component: AccessoriesPageComponent,
      },
      {
        path: 'colecciones',
        component: ColeccionesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'catalagoPage',
      },
    ],
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
