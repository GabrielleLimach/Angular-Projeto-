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
  materiaisUrl = 'http://localhost:8080/materiais';

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
      this.materialService.Consultas(this.materiaisUrl).subscribe(
          data => {
              this.materiais = <Array<Material>>data;
          },
          
      );
  }

}
