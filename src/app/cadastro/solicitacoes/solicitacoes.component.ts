import { MaterialService } from 'services/material.service';
import { Categoria } from 'core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {
  public categorias : Categoria[] = [];
  categoriaUrl = 'http://localhost:8080/categorias';
  

  constructor(private materialservice: MaterialService) { }

  ngOnInit() {
    this.carregarListas();
  }

  carregarListas() {
    this.materialservice.Consultas(this.categoriaUrl).subscribe(
        data => {
            this.categorias = <Array<Categoria>>data;
        },
        
    );
  }
}

