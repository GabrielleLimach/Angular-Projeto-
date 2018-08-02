import { Material, Categoria, Setor, MaterialTipo, Funcionarios, Cargo, Solicitacao } from 'core/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
 
  export class MaterialService {
     
     categorias:   Array <Categoria>    = [];
     setores:      Array <Setor>        = [];
     materiais:    Array <Material>     = [];
     tipos:        Array <MaterialTipo> = [];
     funcionarios: Array <Funcionarios> = [];
     cargos:       Array <Cargo>        = [];

    //url dos servicos
    solicitacaoUrl   =    'http://localhost:8080/solicitacoes';
    materiaisUrl     =    'http://localhost:8080/materiais';
    categoriasUrl    =    'http://localhost:8080/categorias';
    materiaistipoUrl =    'http://localhost:8080/materiaistipo';
    setorUrl         =    'http://localhost:8080/setor';
    funcionariosUrl  =    'http://localhost:8080/funcionarios';
    cargosUrl        =    'http://localhost:8080/cargo';
  
      constructor(
        private http: HttpClient
      ) {}
    
  
      Consultas(url): Observable<any>{
        return this.http.get(url);
      }
  
      adicionars(solicitacao: Solicitacao, url): Observable<Solicitacao> { 
        const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        headers.append( 'Content-Type', 'application/json' );
  
        return this.http.post<Solicitacao>(url, solicitacao, {headers: headers});
       } 

      adicionar(material: Material, url): Observable<Material> { 
        const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        headers.append( 'Content-Type', 'application/json' );
  
        return this.http.post<Material>(url, material, {headers: headers});
       }

       carregarMateriais(){
        this.Consultas(this.materiaisUrl).subscribe(response => this.materiais = response);
      }
  
       deletar (id, url): Observable<any>{
        return this.http.delete(url+"/"+id);
       }
  
       altera (id, url): Observable<any>{
        const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        return this.http.post<Material>(id, url, {headers: headers});
       }

     
  }
  