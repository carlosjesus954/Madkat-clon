import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { TokenUsuario } from '../../interfaces/token-usuario'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public submitText: string = 'Login'

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
  ) {}

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  public submitForm() {
    console.log(this.form)
    if (this.form.valid) {
      const paramsLogin = this.form.value
      const safeLogin: TokenUsuario = {
        email: paramsLogin.email || '',
        password: paramsLogin.password || '',
      }
      this.authService.login(safeLogin)
      this.route.navigateByUrl('/catalogo')
    }
  }
}
