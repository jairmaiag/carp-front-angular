import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AcessoComponent } from "./application/acesso/acesso.component";
import { PessoaComponent } from "./application/pessoa/pessoa.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: AcessoComponent },
  { path: "pessoa", component: PessoaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
