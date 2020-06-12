import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private readonly API = 'http://localhost/pessoa';

  constructor(private http: HttpClient) { }
  listar(){
     return this.http.get<Pessoa[]>(this.API);
  }
}
