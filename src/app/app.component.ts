import { Component, OnInit } from "@angular/core";
import { AcessoService } from "./module/acesso/serivce/acesso.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "carp-front";
  usuarioLogado: boolean = false;

  constructor(private acessoSevice: AcessoService) {}
  ngOnInit() {
    AcessoService.logado.subscribe(
      (logado) => (this.usuarioLogado = logado)
    );
  }
}
