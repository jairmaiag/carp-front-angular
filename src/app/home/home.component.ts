import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {
    $("body").removeClass("bodyAcesso");
  }

  ngOnInit(): void {
  }
}
