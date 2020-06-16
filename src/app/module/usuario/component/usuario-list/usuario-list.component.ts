import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Usuario } from "./../../model/usuario";
import { UsuarioService } from "./../../serivce/usuario.service";

@Component({
  selector: "app-usuario-list",
  templateUrl: "./usuario-list.component.html",
  styleUrls: ["./usuario-list.component.css"],
})
export class UsuarioListComponent implements OnInit {
  lista$: Observable<Usuario[]>;
  totalRegistro: number;

  constructor(private servico: UsuarioService) {}

  ngOnInit(): void {
    this.lista$ = this.servico.getLista();
  }
}
