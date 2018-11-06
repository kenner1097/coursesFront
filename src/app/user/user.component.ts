import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { RegisterModel } from '../model/register.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
  providers: [UserService]
})

export class UserComponent implements OnInit {
  private register: Array<RegisterModel>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadRegisters();
  }

  private loadRegisters(): void{
    this.userService.getRegister().subscribe( res => {
      this.register = res;
      console.log(res);
    });
  }

}