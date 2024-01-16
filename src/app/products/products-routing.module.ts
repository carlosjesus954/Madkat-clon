import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component'
import { CatalogoHomeComponent } from './pages/catalogo-home/catalogo-home.component'
import { NewInPageComponent } from './pages/new-in-page/new-in-page.component'

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
        component: NewInPageComponent,
      },
      {
        path: 'originals',
        component: NewInPageComponent,
      },
      {
        path: 'hoodies',
        component: NewInPageComponent,
      },
      {
        path: 'tShirts',
        component: NewInPageComponent,
      },
      {
        path: 'accessories',
        component: NewInPageComponent,
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
