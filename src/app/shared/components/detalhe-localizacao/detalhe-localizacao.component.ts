import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetalheLocalizacao } from '../../../features/models/detalheLocalizacao';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-detalhe-localizacao',
  imports: [RouterLink, MenuComponent],
  templateUrl: './detalhe-localizacao.component.html',
  styleUrl: './detalhe-localizacao.component.scss'
})
export class DetalheLocalizacaoComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  detalhesLocalizacao: DetalheLocalizacao = new DetalheLocalizacao('','', '', '', '');

  voltar: string = '/locations';
  objetoAPI: string = '';

  ngOnInit(): void {
      this.carregarDados();
  }

  carregarDados() {
    this.route.queryParams.subscribe(params => {
      this.detalhesLocalizacao.name = params['name'];
      this.detalhesLocalizacao.url = params['url'];
      this.detalhesLocalizacao.created = params['created'];
      this.detalhesLocalizacao.type = params['type'];
      this.detalhesLocalizacao.dimension = params['dimension'];
    });
  }
}
