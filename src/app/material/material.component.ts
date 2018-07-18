import { Setor } from 'core/model';
import { MaterialService } from 'services/material.service';
import { Categoria, Material, MaterialTipo } from 'core/model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  //url dos servicos
  materiaisUrl = 'http://localhost:8080/materiais';
  categoriasUrl = 'http://localhost:8080/categorias';
  materiaistipoUrl = 'http://localhost:8080/materiaistipo';
  setorUrl = 'http://localhost:8080/setor';

  categorias:Array<Categoria> = [];
  setores:Array<Setor> =[];
  materiais:Array<Material> = [];
  tipos:Array<MaterialTipo> = [];
  material = new Material();
  Categoria = new Categoria();
  Tipo = new MaterialTipo();
  setor = new Setor();
  
  constructor(private materiaisservice : MaterialService) { }
  
  ngOnInit() {

    //carrega na grade lista de materiais ja cadastrados 
    this.carregarMateriais();
    //carrega lista de categocias no select Categoria
    this.materiaisservice.Consultas(this.categoriasUrl ).subscribe(response => this.categorias = response);
    //carrega lista de tipos no select Tipo
    this.materiaisservice.Consultas(this.materiaistipoUrl).subscribe(response => this.tipos = response);
    //carregar lista de setores 
    this.materiaisservice.Consultas(this.setorUrl).subscribe(response => this.setor = response);

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
