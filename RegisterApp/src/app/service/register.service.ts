import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly rootURL = 'https://localhost:44391/api/'
  formData:Register;
  constructor(private http:HttpClient) { }

  //-----Read/Load Data-----
  loadUsers(){
    return this.http.get(this.rootURL+'Users')
  }

  //-------Insert Data-----
  InsertUser(){
    console.log(this.formData)
    return this.http.post(this.rootURL+'Users',this.formData);
  }

  //--------Update Data-----
  UpdateUser(){
    return this.http.put(this.rootURL+'Users/'+this.formData.Id,this.formData);
  }

  //------Delete Data-----
  DeleteUser(Id: string){
    return this.http.delete(this.rootURL+'Users/'+Id);
  }
}
