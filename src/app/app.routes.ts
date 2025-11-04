import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { GuardiaoService } from './core/guards/guardiao.service';
import { MainComponent } from './shared/components/main/main.component';
import { PersonagemComponent } from './shared/components/personagem/personagem.component';
import { LocalizacaoComponent } from './shared/components/localizacao/localizacao.component';
import { EpisodioComponent } from './shared/components/episodio/episodio.component';
import { DetalhePersonagemComponent } from './shared/components/detalhe-personagem/detalhe-personagem.component';
import { DetalheLocalizacaoComponent } from './shared/components/detalhe-localizacao/detalhe-localizacao.component';
import { DetalheEpisodioComponent } from './shared/components/detalhe-episodio/detalhe-episodio.component';
import { MeuPerfilComponent } from './shared/components/meu-perfil/meu-perfil.component';

export const routes: Routes = [
      {path: '', component: LoginComponent, canActivate:[GuardiaoService]},
      {path: 'login', component: LoginComponent, canActivate:[GuardiaoService]},
      {path: 'main/:usu', component: MainComponent, canActivate:[GuardiaoService]},
      {path: 'meuPerfil/:usu', component: MeuPerfilComponent, canActivate:[GuardiaoService]},
      {path: 'characters', component: PersonagemComponent, canActivate:[GuardiaoService]},
      {path: 'locations', component: LocalizacaoComponent, canActivate:[GuardiaoService]},
      {path: 'episodes', component: EpisodioComponent, canActivate:[GuardiaoService]},
      {path: 'detalhe-personagem', component: DetalhePersonagemComponent, canActivate:[GuardiaoService]},
      {path: 'detalhe-localizacao', component: DetalheLocalizacaoComponent, canActivate:[GuardiaoService]},
      {path: 'detalhe-episodio', component: DetalheEpisodioComponent, canActivate:[GuardiaoService]}
];
