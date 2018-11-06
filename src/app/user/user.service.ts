import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../model/register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private registers: Array<RegisterModel>;
  constructor( private http:HttpClient) { }

  public getRegister(): Observable<RegisterModel[]>{
   return this.http.get<RegisterModel[]>("http://localhost:8090/getRegister");
  }
}