import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { EmployeeService } from 'src/app/employee.service';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  setToken: any;
  login:any = FormGroup;
  private userdetails:{ email: string, password: string }[] | undefined;
  users:any =[];
  isFailed: boolean=false;


  constructor(private fb:FormBuilder, private router:Router,
    private userauth:EmployeeService, private commons:CommonService){

  }

  loginForm=this.fb.group({
      userName:['xyz@gmail.com',[ Validators.required, Validators.email, Validators.minLength(3)]],
      password:['',[Validators.required, Validators.minLength(6)]]
  });

  ngOnInit(): void {
    this.userdetails= this.userauth.getEmployees();

    this.commons.getUser().subscribe((datac:any)=>{
      this.users = datac;
    })
  }

loginSubmit(data:any){
if(data.userName){

  this.userdetails?.forEach((item:any)=>{     //coming from employee service
   if(item.email===data.userName && item.password===data.password){

    console.log('user is valid');
    localStorage.setItem("isLoggedIn","true");
    this.router.navigate(['/homepage']);

   }
   if(!(localStorage.getItem("isLoggedIn"))){

    localStorage.clear();
    console.log("user is invalid");
   }
  // else if(!(localStorage.getItem("isLoggedIn"))) { localStorage.setItem("isLoggedIn","false");}
   console.log(localStorage.getItem("isLoggedIn"));
   //console.log("invalid user");
   });

  // if(this.isFailed) return  alert("Invalid Credentials! Please try again!");
if(!(localStorage.getItem("isLoggedIn"))){

  this.users.forEach((elements:any)=>{     //coming from common service
    if(elements.email===data.userName && elements.password===data.password) {
      console.log('user is valid');
      localStorage.setItem("isLoggedIn","true");
      this.router.navigate(['/homepage']);
    }
    if(!(localStorage.getItem("isLoggedIn"))){

      localStorage.clear();
     console.log("user is invalid");
    }
    else{}
   //  else if(!(localStorage.getItem("isLoggedIn"))) { localStorage.setItem("isLoggedIn","false");}
    console.log(localStorage.getItem("isLoggedIn"));
    console.log("Invalid User");
  });}
}
//console.log(this.isFailed);
//if(this.isFailed) return  alert("Invalid Credentials! Please try again!");
}
goRegister(){
  this.router.navigate(['/register-user']);
}
}

/*

this.users.forEach((elements:any)=>{     //coming from common service
  if(elements.email===data.userName && elements.password===data.password) {
    console.log('user is valid');
    localStorage.setItem("isLoggedIn1","true");
    this.router.navigate(['/homepage']);
  }
  else {
    localStorage.clear();
    //this.isFailed=true
  console.log('user is invalid');}
});   */
