import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService, public router: Router ){

  }
  
  canActivate() {
    console.log('paso por el login Guard');
    if(this._usuarioService.estalogueado()){
      console.log('paso el Guard');
      return true;
    }
    else{
      console.log('Bloquedo por el Guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
