import { Setor } from 'core/model';
import { MaterialService } from 'services/material.service';
import { Categoria, Material, MaterialTipo } from 'core/model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {

  materiais;
  categorias;
  tipos; 
  setor;
  
  material = new Material();

  constructor(private materialservice : MaterialService) { }
  
  ngOnInit() {
    
    this.materialservice.Consultas(this.materialservice.materiaisUrl)
    .subscribe(response => {this.materiais = <Array<Material>> response;});

    this.materialservice.Consultas(this.materialservice.materiaistipoUrl)
    .subscribe(response => {this.tipos = <Array<MaterialTipo>>response;});
    
    this.materialservice.Consultas(this.materialservice.categoriasUrl)
    .subscribe(response => {this.categorias = <Array<Categoria>>response;}); 
    
    this.materialservice.Consultas(this.materialservice.setorUrl)
    .subscribe(response => {this.setor = <Array<Setor>>response;});
   
  }

  adicionarPermanente(f: NgForm){

    this.material.fkmaterialtipo.idmaterialtipo = 1; 
    this.material.validade = null;
    this.material.fkmaterialstatus.idmaterialstatus = 1;

    this.materialservice.adicionar(this.material,this.materialservice.materiaisUrl).subscribe(
      response => {
        console.log(this.materialservice.carregarMateriais());       

      },
      error => console.error(error));
  }
 
  adicionarProvisorio(f: NgForm){

    this.material.fkmaterialtipo.idmaterialtipo = 2; 
    this.material.tombo = null;
    this.material.fkmaterialstatus.idmaterialstatus = 1;

    this.materialservice.adicionar(this.material,this.materialservice.materiaisUrl).subscribe(
      response => {
        console.log(this.materialservice.carregarMateriais());       

      },
      error => console.error(error));
    }

}