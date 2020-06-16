import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as $ from "jquery";

import { MenuService } from "./menu.service";
import { Item } from "./item";
import { AcessoService } from '../module/acesso/serivce/acesso.service';

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
  providers: [MenuService, AcessoService],
})
export class MenuComponent implements OnInit {
  private rotador: Router;
  private itensMenu: Array<Item>;
  private logado: boolean = false;

  constructor(private servico: MenuService) {
    this.servico = servico;
  }

  ngOnInit(): void {
    AcessoService.logado.subscribe(
      logado => this.logado = logado
    );
    this.itensMenu = this.servico.getMenu();
    $(".nav-item").each(function (posicao, item) {
      item.onclick = function () {
        const $listaMenu = $("#intensBarraMenu");
        $listaMenu.removeClass("show");
      };
    });
  }
  getItensMenu(): Array<Item> {
    return this.itensMenu;
  }
  getLogado(): boolean {
    return this.logado;
  }
}
