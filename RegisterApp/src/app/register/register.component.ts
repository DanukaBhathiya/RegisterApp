import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../models/register.model';
import { RegisterService } from '../service/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usersList : any;
  constructor(public register_service:RegisterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
    this.loadUsers();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.register_service.formData={
      Id:0,
      Name:'',
      Age:0,
      Address:''
    }
  }

  OnSubmit(form:NgForm){
    if(this.register_service.formData.Id==0){
      //----insert-----
      this.InsertUser();
    }else{
      //----update-----
      this.UpdateUser();
    }
    this.resetForm();
  }

  loadUsers(){
    this.register_service.loadUsers().subscribe(
      data=>{
        this.usersList =data as Register;
        console.log(this.usersList);
      }
    )
  }


  InsertUser(){
    this.register_service.InsertUser().subscribe(
      (res:any)=>{
        this.toastr.success("Record Inserted", "User Registration");
        this.loadUsers();
        console.log("success")
        
      },
      err=>{
        console.log(err)
      }
      
    )
  }

  UpdateUser(){
    this.register_service.UpdateUser().subscribe(
      (res:any)=>{
        this.toastr.info("Record Updated", "User Registration");
        this.loadUsers();
        console.log("Updated")
        
      },
      err=>{
        console.log(err)
      }
      
    )
  }

  ToForm(user:Register){
    this.register_service.formData=Object.assign({},user);
  }

  DeleteUser(Id: any){
    if(confirm('Are You Sure'))
    this.register_service.DeleteUser(Id).subscribe(
      (res:any)=>{
        this.toastr.warning("Record Deleted", "User Registration");
        this.loadUsers();
        console.log("Deleted")
        
      },
      err=>{
        console.log(err)
      }
      
    )
  }

}
