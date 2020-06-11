import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AcessoComponent } from "./application/acesso/acesso.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: AcessoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
