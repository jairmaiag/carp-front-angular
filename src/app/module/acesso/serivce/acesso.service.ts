import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Usuario } from "./../../usuario/model/usuario";
import { UsuarioService } from "./../../usuario/serivce/usuario.service";

@Injectable({
  providedIn: "root",
})
export class AcessoService {
  private readonly API = `${environment.API}`;
  private readonly APILOGIN = `${this.API}login`;
  private readonly APILOGOUT = `${this.API}logout`;
  usuario: Usuario = {
    id: 0,
    login: null,
    senha: null,
    ativo: false,
  };

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) /* private publicService: PublicoService*/

  {}

  login(usuario: any): any {
    let retorno = usuario;
    //let retorno = this.http.post(this.APILOGIN, usuario).pipe(take(1));
    console.log(retorno);
    return retorno;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }
}
