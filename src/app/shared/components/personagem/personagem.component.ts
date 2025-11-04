import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { VOLTAR } from '../../../app.consts';
import { ChamadaDadoService } from '../../../core/services/chamada-dado.service';
import { map, Observable } from 'rxjs';
import { Character } from '../../../features/models/personagem';
import { NgForOf, NgIf, AsyncPipe, NgFor } from "@angular/common";
import { Cpersonagem } from '../../../features/models/Cpersonagem';

@Component({
    selector: 'app-personagem',
    imports: [RouterLink, NgForOf, NgIf, AsyncPipe, NgFor],
    templateUrl: './personagem.component.html',
    styleUrl: './personagem.component.scss'
})
export class PersonagemComponent implements OnInit {

    constructor(public servico: ChamadaDadoService, public route: Router) { }

    voltar: string = VOLTAR;
    personagens!: Observable<Character[]>;
    nextPersonagens: Array<Cpersonagem> = [];
    page: number = 1;
    fixedPage: number = 0;

    ngOnInit(): void {

        this.personagens = this.servico.buscarPersonagens(this.page).pipe(
            map(
                (results) => {
                    return results.results;
                }
            )
        );

        this.servico.buscarInfoPersonagens(this.page).subscribe(
            response => {
                this.page = parseInt(response.info.next.charAt(response.info.next.length - 1));
                this.fixedPage = response.info.pages;
            }
        );
    }

    redirecionarComObjeto(
        name: string,
        image: string,
        status: string,
        species: string,
        gender: string): void {

        this.route.navigate(['detalhe-personagem'], {
            queryParams:
                { name: name, image: image, status: status, species: species, gender: gender }
        });

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
        this.servico.buscarInfoPersonagens(this.page).subscribe(
            response => {
                if (response.info.next != null) {
                    this.page = parseInt(response.info.next.charAt(response.info.next.length - 1))
                    for (let personagem of response.results) {
                        this.nextPersonagens.push(personagem);
                    }
                }
            }
        );
    }
    
    buscarUltimo(): void {
      this.servico.buscarInfoPersonagens(this.fixedPage).subscribe(
        response => {
            for (let personagem of response.results) {
              this.nextPersonagens.push(personagem);
          }
        }
      );
  }

}
