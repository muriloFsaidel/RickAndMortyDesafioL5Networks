import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../../core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario: string = '';
  senha: string = '';
  placeholderUsuario: string = 'Nome de usuario';
  placeholderSenha: string = 'Senha';
  erro: string = 'usuário inserido inexistente ou senha inserida incorretamente';
  login: boolean = false;

  constructor(public router: Router, public servico:AutenticacaoService){}

  logar(): void{
    if(this.servico.autenticar(this.usuario,this.senha)){
        this.router.navigate(['meuPerfil', this.usuario]);
        this.login = false;
    }else{
        this.login = true;     
    }    
  }
}
