import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,GuardResult,MaybeAsync, Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaoService implements CanActivate {

  constructor(public servico : AutenticacaoService, public router: Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>{
      
      if((!this.servico.estaConectado()) && (route.url.length == 0)){
        return true;
      }
      
      if((!this.servico.estaConectado()) && (route.url[0].path == 'login')){
        return true;
      }

      if(this.servico.estaConectado()){
        if(route.url.length == 0) this.router.navigate(['meuPerfil', this.servico.obterUsuario()])
        if(route.url[0].path == 'login') this.router.navigate(['meuPerfil', this.servico.obterUsuario()]);
        return true;
      }
      this.router.navigate(['login']);
      return false;
   }
}
