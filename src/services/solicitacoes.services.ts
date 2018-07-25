import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Solicitacao } from 'core/model';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

    solicitacaoUrl   =    'http://localhost:8080/solicitacoes';

  constructor( private http: HttpClient) { }

  adicionars(solicitacao: Solicitacao, url): Observable<Solicitacao> { 
    const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
    headers.append( 'Content-Type', 'application/json' );

    return this.http.post<Solicitacao>(url, solicitacao, {headers: headers});
   } 

}