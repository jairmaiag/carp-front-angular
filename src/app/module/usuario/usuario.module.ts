import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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
  imports: [CommonModule, FormsModule, UsuarioRoutingModule],
  providers: [UsuarioService],
  exports: [
    UsuarioListComponent,
    UsuarioDetalheComponent,
    UsuarioFormComponent,
  ],
})
export class UsuarioModule {}
