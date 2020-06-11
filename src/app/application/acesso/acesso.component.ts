import { Usuario } from "./../../model/usuario";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "acesso",
  templateUrl: "./acesso.component.html",
  styleUrls: ["./acesso.component.css"],
})
export class AcessoComponent implements OnInit {
  usuario: Usuario;
  constructor() {}

  ngOnInit(): void {}
  login(): void {}
  logout(): void {}
}
