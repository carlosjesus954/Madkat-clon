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
    const userToken = JSON.parse(localStorage.getItem('userToken') || 'false')
    this.loginToken.next(userToken === 'true')
  }

  public register(params: TokenUsuario) {
    if (params) {
      this.registerToken.next(params)
      const parametros = params
      localStorage.setItem('registerToken', JSON.stringify(parametros))
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
      this.registerUser()
    } else {
      console.log('Error en el inicio de sesión')
      // Aquí puedes manejar el caso de error en el inicio de sesión
      alert('Necesitas registrarte o es incorrecto')
    }
  }
  public registerUser() {
    this.loginToken.next(true)
    localStorage.setItem(
      'userToken',
      JSON.stringify(this.loginToken.getValue()),
    )
  }
}
