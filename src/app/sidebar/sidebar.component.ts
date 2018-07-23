import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: 'cadastro', title: 'Cadastro',  icon: 'pe-7s-graph', class: '' },
    { path: 'solicitacoes', title: 'Solicitacoes',  icon:'pe-7s-note', class: '' },
    { path: 'estoque', title: 'Estoque',  icon:'pe-7s-news-paper', class: '' },
    { path: 'relatorios', title: 'Relatorios',  icon:'pe-7s-graph1', class: '' },
    { path: 'material', title: 'Material',  icon:'pe-7s-user', class: '' },
    { path: 'cadastro', title: 'Cadastro', icon: 'pe-7s-upload', class: ''},
    { path: 'table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    { path: 'estoque', title: 'Estoque',  icon:'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: 'relatorios', title: 'relatorios',  icon:'pe-7s-news-paper', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
