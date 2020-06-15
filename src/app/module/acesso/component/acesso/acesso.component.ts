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
  constructor(private acessoService: AcessoService) {
    this.usuario = this.acessoService.getUsuario();
    $("body").addClass("bodyAcesso");
  }

  ngOnInit(): void {}
  login(formulario): void {
    console.log(formulario);
    console.log(this.usuario);
    //
    //this.usuario = this.acessoService.login(this.usuario);
  }
  logout(): void {}
}
