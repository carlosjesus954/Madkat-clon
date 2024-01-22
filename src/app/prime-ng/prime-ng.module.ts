import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { CardModule } from 'primeng/card'
import { CarouselModule } from 'primeng/carousel'
// import { GalleriaModule } from 'primeng/galleria'
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, CarouselModule, MenubarModule, CardModule],
})
export class PrimeNgModule {}
