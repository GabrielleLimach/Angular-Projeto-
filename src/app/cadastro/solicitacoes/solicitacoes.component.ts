import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SolicitacoesService } from 'services/solicitacoes.services';
import { MaterialService } from 'services/material.service';
import { Categoria, MaterialTipo, Material, Setor, Solicitacao } from 'core/model';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {
  
  materiais;
  categorias;
  tipos; 
  setor;
  
  material = new Material();
  solicitacao = new Solicitacao();

  constructor(private materialservice: MaterialService, private solicitacaoservice: SolicitacoesService ) { }

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

  adicionarPer(f: NgForm){

    this.solicitacao.fksolicitacaostatus =  null; 


    this.materialservice.adicionars(this.solicitacao,this.materialservice.solicitacaoUrl).subscribe(
      response => {
        this.materialservice.carregarMateriais();       

      },
      error => console.error(error));
  }
 
  
  adicionarPro(f: NgForm){

    this.solicitacao.fksolicitacaostatus =  null; 

    this.materialservice.adicionars(this.solicitacao,this.materialservice.solicitacaoUrl).subscribe(
      response => {
        this.materialservice.carregarMateriais();       

      },
      error => console.error(error));
    }
}

