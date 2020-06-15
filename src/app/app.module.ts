import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { OrcamentoModule } from "./module/orcamento/orcamento.module";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { PessoaComponent } from "./application/pessoa/pessoa.component";
import { HomeComponent } from "./home/home.component";
import { OrcamentoComponent } from "./application/orcamento/orcamento.component";
import { OrdemservicoComponent } from "./application/ordemservico/ordemservico.component";
import { FuncionarioComponent } from "./application/funcionario/funcionario.component";
import { ClienteComponent } from "./application/cliente/cliente.component";
import { FornecedorComponent } from "./application/fornecedor/fornecedor.component";
import { ProdutoComponent } from "./application/produto/produto.component";
import { PessoaService } from "./service/pessoa.service";
import { PublicoService } from "./service/publico.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PessoaComponent,
    HomeComponent,
    OrcamentoComponent,
    OrdemservicoComponent,
    FuncionarioComponent,
    ClienteComponent,
    FornecedorComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    OrcamentoModule,
  ],
  providers: [
    PessoaService,
    PublicoService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
