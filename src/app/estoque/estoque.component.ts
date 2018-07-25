import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'services/material.service';
import { Material } from 'core/model';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  public materiais: Material[] = []
  
  permanente;
  provisorio;

  materiaisUrl         =  'http://localhost:8080/materiais';
  materiaisPermanentes =  'http://localhost:8080/materiais/tipo/1';
  materiaisProvisorios =  'http://localhost:8080/materiais/tipo/2';


  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.carregarLista();
    this.carregarPermanentes();
    this.carregarProvisorios();
  }

  //carrega lista de todos os materiais
  carregarLista() {
      this.materialService.Consultas(this.materiaisUrl).subscribe(
          data => {
              this.materiais = <Array<Material>>data;
          },
          
      );
  }


  //metodo de carregar lista de materiais permanentes
  carregarPermanentes(){
    this.materialService.Consultas(this.materiaisPermanentes).subscribe(
        permanente =>{
                console.log(this.permanente = <Array<Material>>permanente);

        },
    );
  }


  //metodo de carregar lista de materiais provisorios
  carregarProvisorios(){
    this.materialService.Consultas(this.materiaisProvisorios).subscribe(
      provisorios => {
            this.provisorio =  <Array<Material>> provisorios;
      },
    );
  }


}
