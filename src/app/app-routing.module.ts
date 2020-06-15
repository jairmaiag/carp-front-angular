import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProdutoComponent } from "./application/produto/produto.component";
import { FornecedorComponent } from "./application/fornecedor/fornecedor.component";
import { ClienteComponent } from "./application/cliente/cliente.component";
import { FuncionarioComponent } from "./application/funcionario/funcionario.component";
import { PessoaComponent } from "./application/pessoa/pessoa.component";
import { OrcamentoComponent } from "./application/orcamento/orcamento.component";
import { OrdemservicoComponent } from "./application/ordemservico/ordemservico.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "funcionario", component: FuncionarioComponent },
  { path: "cliente", component: ClienteComponent },
  { path: "fornecedor", component: FornecedorComponent },
  { path: "produto", component: ProdutoComponent },
  { path: "pessoa", component: PessoaComponent },
  { path: "orcamento", component: OrcamentoComponent },
  { path: "ordemservico", component: OrdemservicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
