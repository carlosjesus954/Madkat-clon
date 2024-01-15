import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutpageComponent } from "./pages/layoutpage/layoutpage.component";

const routes : Routes = [
  {
    path:'',
    component: LayoutpageComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[
    RouterModule
  ]
})
export class ProductsRoutingModule{}
