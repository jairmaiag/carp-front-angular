import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import * as $ from "jquery";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  itnesTabela: Array<Item> = [
    { id: 1, texto: "Usuário", link: "/usuario", subIntens: null },
    { id: 2, texto: "Funcionário", link: "/funcionario", subIntens: null },
    { id: 3, texto: "Cliente", link: "/cliente", subIntens: null },
    { id: 4, texto: "Fornecedor", link: "/fornecedor", subIntens: null },
    { id: 5, texto: "Produto", link: "/produto", subIntens: null },
  ];
  itemTabela = {
    id: 4,
    texto: "Tabelas",
    link: "#",
    subIntens: this.itnesTabela,
  };

  itensMenu: Array<Item> = [
    { id: 1, texto: "Home", link: "/", subIntens: null },
    { id: 2, texto: "Orçamento", link: "/orcamento", subIntens: null },
    { id: 3, texto: "Ordem de Serviço", link: "/os", subIntens: null },
    this.itemTabela,
    { id: 5, texto: "Login", link: "/login", subIntens: null },
  ];

  constructor() {
    $(".nav-item").each(function (posicao, item) {
      item.onclick = function () {
        var $listaMenu = $("#intensBarraMenu");
        $listaMenu.removeClass("show");
      };
    });
  }

  ngOnInit(): void {}
}
