import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'services/funcionarios.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Funcionarios, Cargo, Setor } from 'core/model';
import { MaterialService } from 'services/material.service';
import { AlertService } from '../../../node_modules/ngx-alerts';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  funcionarios;
  cargo;
  setor;
  funcionario = new Funcionarios();

  constructor(
    private funcionariosservice: FuncionariosService, 
    private materialservice: MaterialService,
    private alertsService: AlertService,
  ) { }

  ngOnInit() {

    this.materialservice.Consultas(this.funcionariosservice.funcionariosUrl)
    .subscribe(response => {this.funcionarios = <Array<Funcionarios>> response;});

    this.materialservice.Consultas(this.materialservice.cargosUrl)
    .subscribe(cargos => {this.cargo = <Array<Cargo>> cargos});

    this.materialservice.Consultas(this.materialservice.setorUrl)
    .subscribe(setor => {this.setor = <Array<Setor>> setor})
  }

  adicionarFunc(f: NgForm){

    this.funcionariosservice.adcionarFuncionario(this.funcionario,this.funcionariosservice.funcionariosUrl).subscribe(
      response => {
        this.materialservice.carregarMateriais();  
        this.alertsService.success('Cadastro efetuado com Sucesso');   
        f.onReset();
        
      },
      error => console.error(error));
      
      
  }
 
  



 

}
