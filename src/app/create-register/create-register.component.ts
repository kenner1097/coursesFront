import { Component, OnInit } from '@angular/core';

import { RegisterModel } from '../model/register.model';
import { CreateRegisterService } from './create-register.service';
import { OK } from '../constants/httpstatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.css'],
  providers: [CreateRegisterService]
})
export class CreateRegisterComponent implements OnInit {

  private user: RegisterModel;
  private isValid: boolean = true;
  private message: string = "";
  
  constructor(private createRegisterService: CreateRegisterService, private router: Router) { 
    this.user = new RegisterModel();
  }

  ngOnInit() {
  }

  public saveOrUpdate():void{
    this.isValid = this.createRegisterService.validate(this.user);

    if(this.isValid){
        this.createRegisterService.saveOrUpdate(this.user).subscribe(res => {
          if(res.responseCode ==  OK){
            this.router.navigate(['/userComponent']);
          }else{
            this.message = res.message;
            this.isValid = false;
          }
        });
    }else{
      this.message = "Los campos con * son obligatorios";
    }
  }
}