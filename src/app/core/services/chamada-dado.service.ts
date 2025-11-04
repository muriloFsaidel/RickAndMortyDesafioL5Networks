import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BASE_URL } from '../../app.consts';
import { Observable } from 'rxjs';
import { Character } from '../../features/models/personagem';
import { Location } from '../../features/models/localizacao';
import { Episode } from '../../features/models/episodio';
import { CharacterList } from '../../features/models/fullCharacter';
import { LocationList } from '../../features/models/fullLocation';
import { EpisodeList } from '../../features/models/fullEpisode';

@Injectable({
  providedIn: 'root'
})
export class ChamadaDadoService {

  constructor(public http: HttpClient) { }

  buscarPersonagens(page: number): Observable<{results: Character[]}> {
    return this.http.get<{results: Character[]}>(`${BASE_URL}/character?page=${page}`);
  }

  buscarInfoPersonagens(page: number) {
    return this.http.get<CharacterList>(`${BASE_URL}/character?page=${page}`);
  }

  /*Não foi necessário, mas se fosse fazer outra chamada seria algo assim
  buscarPersonagem(id:number): Observable<Character>{
    return this.http.get<Character>(`${BASE_URL}/character/${id}`);
  }
    share para compartilhar o conteúdo assinado entre outros recursos
    buscarPersonagem(id:number): Observable<any>{
    return this.http.get<any>(`${BASE_URL}/character/${id}`).pipe(share());
  }
    */

  buscarLocalizacoes(page: number): Observable<{results: Location[]}>{
    return this.http.get<{results: Location[]}>(`${BASE_URL}/location?page=${page}`);
  }

  buscarInfoLocalizacoes(page: number) {
    return this.http.get<LocationList>(`${BASE_URL}/location?page=${page}`);
  }

  buscarEpisodios(page: number): Observable<{results: Episode[]}>{
    return this.http.get<{results: Episode[]}>(`${BASE_URL}/episode?page=${page}`);
  }

  buscarInfoEpisodios(page: number) {
    return this.http.get<EpisodeList>(`${BASE_URL}/episode?page=${page}`);
  }
}
