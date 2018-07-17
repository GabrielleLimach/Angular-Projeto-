import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';

import { Material } from './../../core/model';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
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
