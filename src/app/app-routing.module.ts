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
import { AcessoGuard } from "./guards/acesso.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
    canActivate: [AcessoGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./module/acesso/acesso.module").then((mod) => mod.AcessoModule),
  },
  {
    path: "usuario",
    loadChildren: () =>
      import("./module/usuario/usuario.module").then(
        (mod) => mod.UsuarioModule
      ),
    canActivate: [AcessoGuard],
  },
  {
    path: "funcionario",
    component: FuncionarioComponent,
    canActivate: [AcessoGuard],
  },
  { path: "cliente", component: ClienteComponent, canActivate: [AcessoGuard] },
  { path: "fornecedor", component: FornecedorComponent },
  { path: "produto", component: ProdutoComponent, canActivate: [AcessoGuard] },
  { path: "pessoa", component: PessoaComponent, canActivate: [AcessoGuard] },
  {
    path: "orcamento",
    component: OrcamentoComponent,
    canActivate: [AcessoGuard],
  },
  {
    path: "ordemservico",
    component: OrdemservicoComponent,
    canActivate: [AcessoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
