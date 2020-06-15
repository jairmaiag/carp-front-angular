import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsuarioListComponent } from "./component/usuario-list/usuario-list.component";
import { UsuarioFormComponent } from "./component/usuario-form/usuario-form.component";
import { UsuarioDetalheComponent } from "./component/usuario-detalhe/usuario-detalhe.component";

const usuarioRoutes: Routes = [
  { path: "", component: UsuarioListComponent },
  { path: `novo`, component: UsuarioFormComponent },
  { path: `:id/detalhar`, component: UsuarioDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
