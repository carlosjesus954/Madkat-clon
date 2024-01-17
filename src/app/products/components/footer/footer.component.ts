import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public footerItems = [
    {
      id: 0,
      li: 'políticas de envíos',
    },
    {
      id: 1,
      li: 'cambios y devoluciones',
    },
    {
      id: 2,
      li: 'contacto',
    },
    {
      id: 3,
      li: 'tallas',
    },
    {
      id: 4,
      li: 'recomendaciones de cuidado',
    },
    {
      id: 5,
      li: 'condiciones de compra',
    },
    {
      id: 6,
      li: 'políticas de cookies',
    },
    {
      id: 7,
      li: 'política de privacidad',
    },
    {
      id: 8,
      li: 'términos de servicio',
    },
    {
      id: 9,
      li: 'legal',
    },
  ]
}
