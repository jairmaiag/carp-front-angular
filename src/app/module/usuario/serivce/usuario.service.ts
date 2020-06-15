import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";

import { Usuario } from "./../model/usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private id: number;
  private readonly API = `${environment.API}usuario`;
  private readonly APIUSUARIOID = `${this.API}/${this.id}`;

  constructor(private http: HttpClient) {}

  getUsuario(id: number) {
    this.id = id;
    return this.http.get<Usuario>(this.APIUSUARIOID);
  }

  getLista() {
    return this.http.get<Usuario[]>(this.API);
  }
}
