import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { CarouselModule } from 'primeng/carousel'
import { DividerModule } from 'primeng/divider'
import { MenubarModule } from 'primeng/menubar'
import { InputTextModule } from 'primeng/inputtext'
import { PasswordModule } from 'primeng/password'
import { CheckboxModule } from 'primeng/checkbox'
import { ToastModule } from 'primeng/toast'
// import { GalleriaModule } from 'primeng/galleria'
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    MenubarModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
