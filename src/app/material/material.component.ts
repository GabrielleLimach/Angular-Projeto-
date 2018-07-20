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

  
  constructor(private materiaisservice : MaterialService) { }
  
  ngOnInit() {

   
  }
}
