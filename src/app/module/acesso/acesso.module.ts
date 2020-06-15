import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsuarioModule } from "../usuario/usuario.module";

import { AcessoService } from "./serivce/acesso.service";
import { AcessoComponent } from "./component/acesso/acesso.component";

@NgModule({
  declarations: [AcessoComponent],
  imports: [CommonModule, UsuarioModule],
  providers: [AcessoService],
  exports: [AcessoService, AcessoComponent],
})
export class AcessoModule {}
