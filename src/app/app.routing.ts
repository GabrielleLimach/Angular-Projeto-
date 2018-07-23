import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './cadastro/material/material.component';
import { TablesComponent } from './tables/tables.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { SolicitacoesComponent } from './cadastro/solicitacoes/solicitacoes.component';
import { RelatoriosComponent } from './Relatorios/relatorios.component';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'material',       component: MaterialComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'estoque',        component: EstoqueComponent },
    { path: 'solicitacoes',   component: SolicitacoesComponent },
    { path: 'relatorios',     component: RelatoriosComponent },
    { path: 'notifications',  component: NotificationsComponent },
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
