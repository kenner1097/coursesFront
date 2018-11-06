import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/restResponse.model';
import { RegisterModel } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class CreateRegisterService {

  constructor(private http:HttpClient) { }

  /** 
  * Metodo que valida campos obligatorios
  * @param user
  */
  public validate(user:RegisterModel): boolean{
    let isValid = true;

    if(!user.nombre){
      isValid = false;
    }
    if(!user.apellidos){
      isValid = false;
    }
    if(!user.email){
      isValid = false;
    }
    if(!user.password){
      isValid = false;
    }

    return isValid;
  }

  public saveOrUpdate(user:RegisterModel):Observable<RestResponse>{
    return this.http.post <RestResponse> ("http://localhost:8090/saveOrUpdate", JSON.stringify(user));
  }

}