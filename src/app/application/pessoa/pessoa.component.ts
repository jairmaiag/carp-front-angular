import { Component, OnInit } from "@angular/core";

import { Pessoa } from "./../../model/pessoa";
import { PessoaService } from "./../../service/pessoa.service";

@Component({
  selector: "app-pessoa",
  templateUrl: "./pessoa.component.html",
  styleUrls: ["./pessoa.component.css"],
})
export class PessoaComponent implements OnInit {
  pessoas: Pessoa[];

  constructor(private serivco: PessoaService) {}

  ngOnInit(): void {
    this.serivco.listar().subscribe(dados => this.pessoas = dados);
  }
}
