import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuarios.model';
declare function init_plugins();
declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean = false;

  auth2:any;


  constructor(public router:Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleIni();
    this.email = localStorage.getItem('email') || '';
    if(this.email.length>1){
      this.recuerdame = true;
    }
  }

  googleIni(){
    gapi.load('auth2',() => {
       this.auth2 = gapi.auth2.init({
         client_id: '787125642452-q9lpa0b3nvtpnlp9h37vomm45t82u4c4.apps.googleusercontent.com',
         cookiepolicy: 'single_host_origin',
         //Que se quiere traer
         scope: 'profile email'
       });
       this.attachSignin(document.getElementById('btn-google'));
    });
  }

  attachSignin(element){
    this.auth2.attachClickHandler(element, {}, (googleUser) =>{
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token)
      // .subscribe( () => this.router.navigate(['/dashboard']));
      .subscribe( () => window.location.href = '#/dashboard');
    });
  }

  ingresar(forma: NgForm){
    if(forma.invalid){
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login(usuario, forma.value.recuerdame)
    .subscribe( res => this.router.navigate(['/dashboard']));
  }

}
