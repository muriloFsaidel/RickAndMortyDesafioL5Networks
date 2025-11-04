import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AUTENTICADO } from '../../../app.consts';
import { NgIf } from "@angular/common";
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../../core/services/autenticacao.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  constructor(public servico: AutenticacaoService, public route: Router) { }

  usuario: any = localStorage.getItem(AUTENTICADO);
  opcao: any = 'meuPerfil';
  meuPerfil: string = 'meuPerfil';
  deslogar: string = 'deslogar';
  dadoPesquisa: string ='';

  ngOnInit(): void {
    this.opcao = 'meuPerfil';
    this.usuario = localStorage.getItem(AUTENTICADO);
    this.route.navigate(['meuPerfil', this.usuario]);
    this.dadoPesquisa = '';
  };


  redirecionar(valor: string): void {
    switch (valor) {
      case this.meuPerfil:
        this.route.navigate(['meuPerfil', localStorage.getItem(AUTENTICADO)], { 
          queryParams: {
              dado: this.dadoPesquisa
         }});
        break;

      case this.deslogar:
        this.servico.desconectar();
        this.route.navigate(['login']);
        break;
      case this.usuario:
        this.usuario = localStorage.getItem(AUTENTICADO);
        break;

    }
  }

  encolherMenu() {
    document.querySelector(".lista")?.classList.add("esconder");
    document.querySelector(".rotas")?.classList.add("esconder");
    document.getElementById("fechar")?.classList.add("esconder");
    document.querySelector(".operacoes")?.classList.add("encolher");
    document.querySelector(".barra-de-pesquisa")?.classList.add("esconder");
  }

  mostrarMenu() {
    document.querySelector(".lista")?.classList.remove("esconder");
    document.querySelector(".rotas")?.classList.remove("esconder");
    document.getElementById("fechar")?.classList.remove("esconder");
    document.querySelector(".operacoes")?.classList.remove("encolher");
    document.querySelector(".barra-de-pesquisa")?.classList.remove("esconder");
  }
}
