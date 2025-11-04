import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meu-perfil',
  imports: [],
  templateUrl: './meu-perfil.component.html',
  styleUrl: './meu-perfil.component.scss'
})
export class MeuPerfilComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  welcome: WritableSignal<string> = signal("Seja bem-vindo");

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        if(params['dado'] != undefined){
          this.welcome.set(params['dado']);
        }
      }
    )
  }
}
