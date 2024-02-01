import { Location } from '@angular/common'
import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public submitText: string = 'Crear una cuenta'

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}
  public goToLogin() {
    this.location.back()
  }
  public form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    checkBox: ['', [Validators.required]],
  })
  public submitForm() {
    console.log('no entra cojone')
    console.log(this.form)
    if (this.form.valid) {
      console.log('ha entrado')
    }
  }
}
