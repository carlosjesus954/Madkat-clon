import { Location } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public submitText: string = 'Crear una cuenta'

  constructor(private location: Location) {}
  public goToLogin() {
    this.location.back()
  }
}
