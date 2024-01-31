import { NgModule, LOCALE_ID } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PrimeNgModule } from './prime-ng/prime-ng.module'

// Prime-ng Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//configuracion del locale de la app
import localEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
import { AuthModule } from './auth/auth.module'
import { ProductsModule } from './products/products.module'

registerLocaleData(localEs)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    AuthModule,
    ProductsModule,
  ],
  providers: [
    {
      //Pone en toda la aplicacion en español por defecto
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
