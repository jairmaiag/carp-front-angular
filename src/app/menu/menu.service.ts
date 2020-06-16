import { Injectable } from "@angular/core";

import { Item } from "./item";
import { PublicoService } from "../service/publico.service";
import { AcessoService } from "../module/acesso/serivce/acesso.service";

@Injectable({
  providedIn: "root",
})
export class MenuService {

  logado: boolean = false;

  constructor(private publicService: PublicoService) {
    AcessoService.logado.subscribe(logado => this.logado = logado);
    //this.logado = AcessoService.usuarioLogado;
  }

  getLogado(): boolean {
    return this.logado;
  }
  getMenu(): Array<Item> {
    let itnesTabela: Array<Item> = [
      { id: 1, texto: "Usuário", link: "/usuario", subIntens: null },
      { id: 2, texto: "Funcionário", link: "/funcionario", subIntens: null },
      { id: 3, texto: "Cliente", link: "/cliente", subIntens: null },
      { id: 4, texto: "Fornecedor", link: "/fornecedor", subIntens: null },
      { id: 5, texto: "Produto", link: "/produto", subIntens: null },
    ];
    let itemTabela = {
      id: 4,
      texto: "Tabelas",
      link: "#",
      subIntens: itnesTabela,
    };

    let itensMenu: Array<Item> = [
      { id: 1, texto: "Home", link: "/", subIntens: null },
      { id: 2, texto: "Orçamento", link: "/orcamento", subIntens: null },
      {
        id: 3,
        texto: "Ordem de Serviço",
        link: "/ordemservico",
        subIntens: null,
      },
      itemTabela,
      { id: 5, texto: "Login", link: "/login", subIntens: null },
    ];
    return itensMenu;
  }
}
