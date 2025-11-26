import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DetalhePersonagem } from '../../../features/models/detalhePersonagem';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-detalhe-personagem',
  imports: [RouterLink, MenuComponent],
  templateUrl: './detalhe-personagem.component.html',
  styleUrl: './detalhe-personagem.component.scss'
})
export class DetalhePersonagemComponent implements OnInit {

  constructor(public route: ActivatedRoute){}

  voltar: string = '/characters';
  detalhesPersonagem: DetalhePersonagem = new DetalhePersonagem('','','','','');

  ngOnInit(): void {
      this.carregarDados();
  }

  carregarDados(){
    this.route.queryParams.subscribe(params =>{
      this.detalhesPersonagem.name = params['name'];
      this.detalhesPersonagem.image = params['image'];
      this.detalhesPersonagem.status = params['status'];
      this.detalhesPersonagem.species = params['species'];
      this.detalhesPersonagem.gender = params['gender'];
    })
  }

}
