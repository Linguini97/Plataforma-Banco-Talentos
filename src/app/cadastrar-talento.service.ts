import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrarTalentoService {

  private baseUrl = 'http://localhost:8080/talentos';

  constructor(private http:HttpClient) { }

  cadastrarTalento(dados:any){
    return this.http.post(this.baseUrl, dados);
  }
}
