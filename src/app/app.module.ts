import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { PessoaComponent } from './application/pessoa/pessoa.component';
import { UsuarioComponent } from './application/usuario/usuario.component';
import { AcessoComponent } from './application/acesso/acesso.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, PessoaComponent, UsuarioComponent, AcessoComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
