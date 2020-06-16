import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PublicoService {
  private logado: boolean = false;

  constructor() { }

  getLogado(): boolean {
    return this.logado;
  }
  setLogado(logado: boolean): void {
    this.logado = logado;
  }
}
