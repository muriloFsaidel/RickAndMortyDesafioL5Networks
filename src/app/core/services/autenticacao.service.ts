import { Injectable } from '@angular/core';
import { AUTENTICADO,TOKEN, USUARIO, SENHA } from '../../app.consts';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor() { }

  autenticar(usuario: string, senha:string){
    if(usuario === USUARIO && senha === SENHA){
      let token = 'Bearer '+ window.btoa("HS256 : JWT")+"."+window.btoa(usuario +" : "+ senha) +"."+ window.btoa('meu-segredo');
      localStorage.setItem(AUTENTICADO,usuario);
      localStorage.setItem(TOKEN,token);
      return true;
    }
    return false;
  }

  obterUsuario(){
    return localStorage.getItem(AUTENTICADO);
  }

  obterToken(){
    if(localStorage.getItem(AUTENTICADO)){
      return localStorage.getItem(TOKEN);
    };
    return null;
  }

  estaConectado(){
    let usuario = this.obterUsuario();
    return (usuario != null);
  }

  desconectar(){
    localStorage.removeItem(AUTENTICADO);
    localStorage.removeItem(TOKEN);
  }
}
