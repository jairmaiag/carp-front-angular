import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { PessoaComponent } from "./application/pessoa/pessoa.component";
import { UsuarioComponent } from "./application/usuario/usuario.component";
import { AcessoComponent } from "./application/acesso/acesso.component";
import { HomeComponent } from "./home/home.component";
import { OrcamentoComponent } from "./application/orcamento/orcamento.component";
import { OrdemservicoComponent } from "./application/ordemservico/ordemservico.component";
import { FuncionarioComponent } from "./application/funcionario/funcionario.component";
import { ClienteComponent } from "./application/cliente/cliente.component";
import { FornecedorComponent } from "./application/fornecedor/fornecedor.component";
import { ProdutoComponent } from "./application/produto/produto.component";
import { UsuariodetalheComponent } from "./application/usuario/usuariodetalhe/usuariodetalhe.component";
import { UsuarioService } from "./service/usuario.service";
import { PessoaService } from "./service/pessoa.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PessoaComponent,
    UsuarioComponent,
    AcessoComponent,
    HomeComponent,
    OrcamentoComponent,
    OrdemservicoComponent,
    FuncionarioComponent,
    ClienteComponent,
    FornecedorComponent,
    ProdutoComponent,
    UsuariodetalheComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [PessoaService, UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
