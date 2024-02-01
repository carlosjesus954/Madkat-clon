import { Injectable } from '@angular/core'
import { TokenUsuario } from '../interfaces/token-usuario'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public register(params: TokenUsuario) {}
}
