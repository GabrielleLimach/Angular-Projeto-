import { Funcionarios, Cargo } from './../core/model';
import { MaterialService } from './material.service';
import { Categoria, Setor, Material, MaterialTipo } from 'core/model';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  //url dos servicos
  materiaisUrl = 'http://localhost:8080/materiais';
  categoriasUrl = 'http://localhost:8080/categorias';
  materiaistipoUrl = 'http://localhost:8080/materiaistipo';
  setorUrl = 'http://localhost:8080/setor';
  funcionariosUrl = 'http://localhost:8080/funcionarios';
  cargosUrl = 'http://localhost:8080/cargo';


  categorias: Array <Categoria> = [];
  setores: Array <Setor> = [];
  materiais: Array <Material> = [];
  tipos: Array <MaterialTipo> = [];
  funcionarios: Array <Funcionarios> =[];
  cargos: Array <Cargo> = [];


  material = new Material();
  Categoria = new Categoria();
  Tipo = new MaterialTipo();
  setor = new Setor();
  funcionario = new Funcionarios();
  cargo = new Cargo();

  constructor(private materiaisservice : MaterialService) { 

   //carrega na grade lista de materiais ja cadastrados 
   this.carregarMateriais();
   //carrega lista de categocias no select Categoria
   this.materiaisservice.Consultas(this.categoriasUrl ).subscribe(response => this.categorias = response);
   //carrega lista de tipos no select Tipo
   this.materiaisservice.Consultas(this.materiaistipoUrl).subscribe(response => this.tipos = response);
   //carregar lista de setores 
   this.materiaisservice.Consultas(this.setorUrl).subscribe(response => this.setor = response); 
   //carrega lista de funcionarios
   this.materiaisservice.Consultas(this.funcionariosUrl).subscribe(response=> this.funcionario = response);
   //carrega lista de cargos
   this.materiaisservice.Consultas(this.cargosUrl).subscribe(response => this.cargo = response);

  // var x = document.querySelector("#campo_teste");
   //x.removeAttribute("text-success");
   //console.log(x.classList.length);

 }
 
 //adicona um novo
 adicionar(f: NgForm){
   this.materiaisservice.adicionar( this.material,this.materiaisUrl).subscribe(
     response => {
       this.carregarMateriais();
       this.novo();        
     },
     error => console.error(error));
   }

 //retorna lista ja de materiais ja cadastrados
  carregarMateriais(){
    this.materiaisservice.Consultas(this.materiaisUrl).subscribe(response => this.materiais = response);
  }

  apagar(id){
    this.materiaisservice.deletar(id,this.materiaisUrl).subscribe(response => {
        //remover o item da lista
        this.carregarMateriais();

      } );
  }

  alterar(id){
    this.materiaisservice.Consultas(this.materiaisUrl+"/"+id).subscribe(response => this.material = response);
  }
 
 novo() {
  this.material = new Material();
 }

}
