import { Injectable } from '@angular/core'
import { TokenUsuario } from '../interfaces/token-usuario'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerToken = new BehaviorSubject<TokenUsuario>({
    name: '',
    apellidos: '',
    email: '',
    password: '',
  })
  registerToken$ = this.registerToken.asObservable()

  private loginToken = new BehaviorSubject<boolean>(false)
  loginToken$ = this.loginToken.asObservable()
  constructor() {
    const registerToken = JSON.parse(
      localStorage.getItem('registerToken') || '{}',
    )
    this.registerToken.next(registerToken)
  }

  public register(params: TokenUsuario) {
    if (params) {
      this.registerToken.next(params)
      localStorage.setItem('registerToken', JSON.stringify(params))
      console.log('AUTH SERVICE', this.registerToken)
    }
  }
  public login(params: TokenUsuario) {
    const storedToken: TokenUsuario = JSON.parse(
      localStorage.getItem('registerToken') || '{}',
    )

    if (
      params.email === storedToken.email &&
      params.password === storedToken.password
    ) {
      console.log('Inicio de sesión exitoso')
      // Aquí puedes realizar las acciones necesarias para el inicio de sesión exitoso
    } else {
      console.log('Error en el inicio de sesión')
      // Aquí puedes manejar el caso de error en el inicio de sesión
    }
  }
  public registerUser() {
    this.loginToken.next(true)
    localStorage.setItem('userToken', JSON.stringify(this.loginToken))
  }
}
