import { Setor } from 'core/model';
import { MaterialService } from 'services/material.service';
import { Categoria, Material, MaterialTipo } from 'core/model';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { Observable } from 'rxjs';


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
  
  constructor(
    private materialservice: MaterialService,
    private alertService: AlertService,
  ) { }
  
  ngOnInit() {
    
    this.materialservice.Consultas(this.materialservice.materiaisUrl)
    .subscribe(response => {this.materiais = <Array<Material>>response;});

    this.materialservice.Consultas(this.materialservice.materiaistipoUrl)
    .subscribe(response => {this.tipos = <Array<MaterialTipo>>response;});
    
    this.materialservice.Consultas(this.materialservice.categoriasUrl)
    .subscribe(response => {this.categorias = <Array<Categoria>>response;}); 
    
    this.materialservice.Consultas(this.materialservice.setorUrl)
    .subscribe(response => {this.setor = <Array<Setor>>response;});
   
  }

  adicionarPermanente(per: NgForm){

    this.material.fkmaterialtipo.idmaterialtipo = 1; 
    this.material.validade = null;
    this.material.fkmaterialstatus.idmaterialstatus = 1;

    this.materialservice.adicionar(this.material,this.materialservice.materiaisUrl).subscribe(
      response => {
        console.log(this.materialservice.carregarMateriais());       
        this.alertService.success('Material cadastrado com sucesso');
        per.onReset();       
      },

      error => console.error(error));
      //this.alertService.danger('Erro ao cadastrar material'); 
  }
 
  adicionarProvisorio(pro: NgForm){

    this.material.fkmaterialtipo.idmaterialtipo = 2; 
    this.material.tombo = null;
    this.material.fkmaterialstatus.idmaterialstatus = 1;

    this.materialservice.adicionar(this.material,this.materialservice.materiaisUrl).subscribe(
      response => {
        console.log(this.materialservice.carregarMateriais());
        this.alertService.success('Material cadastrado com sucesso');
        pro.onReset();
        
      },
      error => console.error(error));
      //this.alertService.danger('Erro ao cadastrar material');
    }
    
    
}