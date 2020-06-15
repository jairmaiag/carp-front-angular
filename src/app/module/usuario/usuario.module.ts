import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsuarioRoutingModule } from "./usuario-routing.module";
import { UsuarioListComponent } from "./component/usuario-list/usuario-list.component";
import { UsuarioDetalheComponent } from "./component/usuario-detalhe/usuario-detalhe.component";
import { UsuarioFormComponent } from "./component/usuario-form/usuario-form.component";
import { UsuarioService } from "./serivce/usuario.service";

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioDetalheComponent,
    UsuarioFormComponent,
  ],
  imports: [CommonModule, UsuarioRoutingModule],
  providers: [UsuarioService],
  exports: [
    UsuarioListComponent,
    UsuarioDetalheComponent,
    UsuarioFormComponent,
    UsuarioService,
  ],
})
export class UsuarioModule {}
