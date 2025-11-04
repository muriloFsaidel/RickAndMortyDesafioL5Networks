import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DetalheEpisodio } from '../../../features/models/detalheEpisiodio';

@Component({
  selector: 'app-detalhe-episodio',
  imports: [RouterLink],
  templateUrl: './detalhe-episodio.component.html',
  styleUrl: './detalhe-episodio.component.scss'
})
export class DetalheEpisodioComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  episodio: DetalheEpisodio = new DetalheEpisodio('', '', '', '', '');

  voltar: string = '/episodes';

  ngOnInit(): void {
      this.carregarDados();
  }

  carregarDados() {
    this.route.queryParams.subscribe(params => {
      this.episodio.name = params['name'];
      this.episodio.url = params['url'];
      this.episodio.created = params['created'];
      this.episodio.episode = params['episode'];
      this.episodio.air_date = params['air_date'];
    })

  }
}
