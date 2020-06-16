import { Injectable, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

import { Usuario } from "./../../usuario/model/usuario";
import { PublicoService } from './../../../service/publico.service';
//import { UsuarioService } from "./../../usuario/serivce/usuario.service";

@Injectable({
  providedIn: "root",
})
export class AcessoService {
  private readonly API = `${environment.API}`;
  private readonly APILOGIN = `${this.API}login`;
  private readonly APILOGOUT = `${this.API}logout`;
  static usuarioLogado: boolean = false;
  usuario: Usuario = {
    id: 0,
    login: null,
    senha: null,
    ativo: false,
  };

  static logado = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private rotas: Router, private publicService: PublicoService /* private usuarioService: UsuarioService */
  ) { }

  login(usuario: Usuario): Usuario {
    let retorno = usuario;
    //let retorno = this.http.post(this.APILOGIN, usuario).pipe(take(1));
    if (retorno.login === "jairmaiag@gmail.com" && retorno.senha === "123456") {
      AcessoService.usuarioLogado = true;
      AcessoService.logado.emit(true);
      this.rotas.navigate(["/"]);
    } else {
      AcessoService.usuarioLogado = false;
      AcessoService.logado.emit(false);
    }
    return retorno;
  }
  getUsuarioLogado(): boolean {
    return AcessoService.usuarioLogado;
  }
  getUsuario(): Usuario {
    return this.usuario;
  }
}
