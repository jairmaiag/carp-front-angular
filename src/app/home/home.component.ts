import { Component, OnInit } from "@angular/core";

import { AcessoService } from "./../service/acesso.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private acesso: AcessoService) {}

  ngOnInit(): void {}
}
