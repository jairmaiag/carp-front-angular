import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs";
import { Usuario } from "./../../../model/usuario";
import { UsuarioService } from "./../../../service/usuario.service";

@Component({
  selector: "app-usuariodetalhe",
  templateUrl: "./usuariodetalhe.component.html",
  styleUrls: ["./usuariodetalhe.component.css"],
})
export class UsuariodetalheComponent implements OnInit {
  id: number;
  dado: Usuario;
  inscriacao: Subscription;

  constructor(
    private servico: UsuarioService,
    private rota: Router,
    private rotaAtiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inscriacao = this.rotaAtiva.params.subscribe((params: any) => {
      this.id = params["id"];
      this.servico.getUsuario(this.id).subscribe((entity) => {
        this.dado = entity;
      });
    });
  }
  ngOnDestroy(): void {
    this.inscriacao.unsubscribe();
  }
  voltar(): void {
    this.rota.navigate(['/usuario']);
  }
}
