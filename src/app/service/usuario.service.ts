import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./../model/usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private readonly API = "http://localhost/usuario";
  constructor(private http: HttpClient) {}

  getUsuario(id: number) {
    return this.http.get<Usuario>(this.API + "/" + id);
  }

  getLista() {
    return this.http.get<Usuario[]>(this.API);
  }
}
