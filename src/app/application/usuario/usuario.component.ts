import { Usuario } from "./../../model/usuario";
import { UsuarioService } from "./../../service/usuario.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"],
})
export class UsuarioComponent implements OnInit {
  lista: Usuario[];
  totalRegistro: number;

  constructor(private servico: UsuarioService) {}

  ngOnInit(): void {
    this.servico.getLista().subscribe((dados) => {
      this.lista = dados;
      this.totalRegistro = dados.length;
    });
  }
}
