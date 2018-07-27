import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from 'core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class FuncionariosService  {

  funcionariosUrl = 'http://localhost:8080/funcionarios';

  constructor( private http: HttpClient ) { }

  adcionarFuncionario(funcionario : Funcionarios, url): Observable<Funcionarios>{
      const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
      headers.append( 'Content-Type', 'application/json' );

      return this.http.post<Funcionarios>(url, funcionario, {headers: headers});

  }
}



