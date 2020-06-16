import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

import { Observable } from "rxjs";
import { AcessoService } from "../module/acesso/serivce/acesso.service";

@Injectable({
  providedIn: "root",
})
export class AcessoGuard implements CanActivate {
  constructor(private rotas: Router) { }

  canActivate(
    rota: ActivatedRouteSnapshot,
    estado: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let retorno = AcessoService.usuarioLogado;
    if (!retorno) {
      this.rotas.navigate(["/login"]);
    }
    return retorno;
  }
}
