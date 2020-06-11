import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcessoComponent } from "./application/acesso/acesso.component";

const routes: Routes = [{ path: "login", component: AcessoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
