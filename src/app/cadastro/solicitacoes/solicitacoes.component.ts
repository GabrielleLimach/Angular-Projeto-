import { MaterialService } from 'services/material.service';
import { Categoria, MaterialTipo, Material } from 'core/model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {
  
  materiais;
  categorias;
  tipos; 
  
  material = new Material();

  constructor(private materialservice: MaterialService) { }

  ngOnInit() {

    this.materialservice.Consultas(this.materialservice.materiaisUrl)
    .subscribe(response => {this.materiais = <Array<Material>> response;});

    this.materialservice.Consultas(this.materialservice.materiaistipoUrl)
    .subscribe(response => {this.tipos = <Array<MaterialTipo>>response;});
    
    this.materialservice.Consultas(this.materialservice.categoriasUrl)
    .subscribe(response => {this.categorias = <Array<Categoria>>response;});   

  }

  adicionarPermanente(f: NgForm){

    //console.log(document.getElementsByName("aba").item(1).nodeValue);
    this.material.fkmaterialtipo.idmaterialtipo = 1; 

    this.materialservice.adicionar(this.material,this.materialservice.materiaisUrl).subscribe(
      response => {
        console.log(this.materialservice.carregarMateriais());       

      },
      error => console.error(error));
    }
 
}

