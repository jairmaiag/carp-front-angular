import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

import { Usuario } from "./../../../usuario/model/usuario";
import { AcessoService } from "./../../serivce/acesso.service";

@Component({
  selector: "app-acesso",
  templateUrl: "./acesso.component.html",
  styleUrls: ["./acesso.component.css"],
})
export class AcessoComponent implements OnInit {

  usuario: Usuario;
  falhaAutenticacao: boolean = false;

  constructor(private acessoService: AcessoService) {
    this.usuario = this.acessoService.getUsuario();
    $("body").addClass("bodyAcesso");
  }

  ngOnInit(): void { }

  login(formAcesso): void {
    this.acessoService.login(this.usuario);
    this.falhaAutenticacao = !this.acessoService.getUsuarioLogado();
  }

  logout(): void { }
}
