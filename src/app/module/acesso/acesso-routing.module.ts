import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AcessoComponent } from "./component/acesso/acesso.component";

const acessoRoutes: Routes = [{ path: "", component: AcessoComponent }];

@NgModule({
  imports: [RouterModule.forChild(acessoRoutes)],
  exports: [RouterModule],
})
export class AcessoRoutingModule {}
