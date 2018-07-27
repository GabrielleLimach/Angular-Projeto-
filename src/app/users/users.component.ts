import { Component, OnInit } from '@angular/core';

import { UsersService } from 'services/funcionarios.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
   
  }

 

}
