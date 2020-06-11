import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

import { MenuService } from "./menu.service";
import { Item } from "./item";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
  providers: [MenuService],
})
export class MenuComponent implements OnInit {
  servico: MenuService;
  itensMenu: Array<Item>;

  constructor(servico: MenuService) {
    this.servico = servico;
    this.itensMenu = this.servico.getMenu();
    $(".nav-item").each(function (posicao, item) {
      item.onclick = function () {
        var $listaMenu = $("#intensBarraMenu");
        $listaMenu.removeClass("show");
      };
    });
  }

  ngOnInit(): void {}
}
