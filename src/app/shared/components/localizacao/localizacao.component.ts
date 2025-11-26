import { Component, OnInit } from '@angular/core';
import { VOLTAR } from '../../../app.consts';
import { RouterLink, Router } from '@angular/router';
import { ChamadaDadoService } from '../../../core/services/chamada-dado.service';
import { NgIf, AsyncPipe, NgFor, NgForOf } from "@angular/common";
import { map, Observable } from 'rxjs';
import { Location } from '../../../features/models/localizacao';
import { CLocalizacao } from '../../../features/models/CLocalizacao';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-localizacao',
  imports: [RouterLink, NgIf, AsyncPipe, NgFor, NgForOf,MenuComponent],
  templateUrl: './localizacao.component.html',
  styleUrl: './localizacao.component.scss'
})
export class LocalizacaoComponent implements OnInit {

  constructor(public servico: ChamadaDadoService, public route: Router) { }

  localizacoes!: Observable<Location[]>;
  nextLocalizacaoes: Array<CLocalizacao> = [];
  page: number = 1;
  fixedPage: number = 0;
  ultimaPagina: boolean = false;

  voltar: string = VOLTAR;

  ngOnInit(): void {

    this.localizacoes = this.servico.buscarLocalizacoes(this.page)
      .pipe(
        map(
          results => {
            return results.results
          }
        )
      );

    this.servico.buscarInfoLocalizacoes(this.page).subscribe(
      response => {
        this.page = parseInt(response.info.next.charAt(response.info.next.length - 1))
        this.fixedPage = response.info.pages;
      }
    );
  }

  onScroll(): void {    
      if(this.page == this.fixedPage){
        const div = document.querySelector(".tbs") as HTMLElement;
        div.style.overflowX='hidden';
        return
      } else{
        this.buscarProximo();
      }         
  }

  redirecionarComObjeto(
    name: string,
    url: string,
    created: string,
    type: string,
    dimension: string): void {
    this.route.navigate(['detalhe-localizacao'], {
      queryParams: {
        name: name,
        url: url,
        created: created,
        type: type,
        dimension: dimension
      }
    })

  }

  buscarProximo(): void {
      this.servico.buscarInfoLocalizacoes(this.page).subscribe(
        response => {
          if (response.info.next != null) {
            this.page = parseInt(response.info.next.charAt(response.info.next.length - 1))
            for (let localizacao of response.results) {
              this.nextLocalizacaoes.push(localizacao);
            }
          }
        }
      );
  }

  buscarUltimo(): void {
      this.servico.buscarInfoLocalizacoes(this.fixedPage).subscribe(
        response => {
            for (let localizacao of response.results) {
              this.nextLocalizacaoes.push(localizacao);
          }
        }
      );
  }
}
