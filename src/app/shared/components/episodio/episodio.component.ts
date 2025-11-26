import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { VOLTAR } from '../../../app.consts';
import { ChamadaDadoService } from '../../../core/services/chamada-dado.service';
import { Observable, map } from 'rxjs';
import { Episode } from '../../../features/models/episodio';
import { NgIf, NgForOf, AsyncPipe } from "@angular/common";
import { NgFor } from '@angular/common';
import { CEpisodio } from '../../../features/models/CEpisodio';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-episodio',
  imports: [RouterLink, NgIf, NgForOf, NgFor, AsyncPipe, MenuComponent],
  templateUrl: './episodio.component.html',
  styleUrl: './episodio.component.scss'
})
export class EpisodioComponent implements OnInit {

  constructor(public route: Router, public servico: ChamadaDadoService) { }

  voltar: string = VOLTAR;
  episodios!: Observable<Episode[]>;
  nextEpisodios: Array<CEpisodio> = [];
  page: number = 1;
  fixedPage: number = 0;

  ngOnInit(): void {
    this.episodios = this.servico.buscarEpisodios(this.page)
      .pipe(
        map(
          results => {
            return results.results
          }
        )
      );
    this.servico.buscarInfoEpisodios(this.page).subscribe(
      response => {
        this.page = parseInt(response.info.next.charAt(response.info.next.length - 1));
        this.fixedPage = response.info.pages;
      }
    );
  }

  redirecionarComObjeto(
    name: string,
    created: string,
    url: string,
    episode: string,
    air_date: string) {

    this.route.navigate(['detalhe-episodio'], {
      queryParams: {
        name: name,
        created: created,
        url: url,
        episode: episode,
        air_date: air_date
      }
    })

  }

  onScroll(): void {
    if (this.page == this.fixedPage) {
      const div = document.querySelector(".tbs") as HTMLElement;
      div.style.overflowX = 'hidden';
      return
    } else {
      this.buscarProximo();
    }
  }
  buscarProximo(): void {
    this.servico.buscarInfoEpisodios(this.page).subscribe(
      response => {
        if (response.info.next != null) {
          this.page = parseInt(response.info.next.charAt(response.info.next.length - 1));
          for (let episodio of response.results) {
            this.nextEpisodios.push(episodio);
          }
        }
      }
    );
  }

  buscarUltimo(): void {
      this.servico.buscarInfoEpisodios(this.fixedPage).subscribe(
        response => {
            for (let episodio of response.results) {
              this.nextEpisodios.push(episodio);
          }
        }
      );
  }

}
