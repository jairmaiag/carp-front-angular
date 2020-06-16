import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UsuarioModule } from "../usuario/usuario.module";

import { AcessoRoutingModule } from "./acesso-routing.module";
import { AcessoService } from "./serivce/acesso.service";
import { AcessoComponent } from "./component/acesso/acesso.component";

@NgModule({
  declarations: [AcessoComponent],
  imports: [CommonModule, FormsModule, AcessoRoutingModule, UsuarioModule],
  providers: [AcessoService],
  bootstrap: [AcessoComponent],
})
export class AcessoModule { }
