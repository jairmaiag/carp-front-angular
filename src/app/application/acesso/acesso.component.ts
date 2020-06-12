import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

import { Usuario } from "./../../model/usuario";

@Component({
  selector: "acesso",
  templateUrl: "./acesso.component.html",
  styleUrls: ["./acesso.component.css"],
})
export class AcessoComponent implements OnInit {
  usuario: Usuario;
  constructor() {
    $("body").addClass("bodyAcesso");
    $("#barraMenu").hide();
  }

  ngOnInit(): void {}
  login(): void {}
  logout(): void {}
}
