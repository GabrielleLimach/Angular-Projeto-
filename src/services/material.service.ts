import { Material } from './../core/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  
  export class MaterialService {
  
      constructor(
        private http: HttpClient
      ) {}
    
      // consultar(): Observable<any> {
      //   return this.http.get(this.materiaisUrl);
      // }
      // categorias(): Observable<any> {
      //   return this.http.get(this.categoriasUrl);
      // }
      // tipos(): Observable<any>{
      //   return this.http.get(this.materiaistipoUrl);
      // }
  
  
      Consultas(url): Observable<any>{
        return this.http.get(url);
      }
  
  
      adicionar(material: Material, url): Observable<Material> { 
        const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        headers.append( 'Content-Type', 'application/json' );
  
        return this.http.post<Material>(url, material, {headers: headers});
       }
  
       deletar ( id, url): Observable<any>{
        return this.http.delete(url+"/"+id);
       }
  
       altera( id, url): Observable<any>{
        const headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        return this.http.post<Material>(id, url, {headers: headers});
       }

     
  }
  