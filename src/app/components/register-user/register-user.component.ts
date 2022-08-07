import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  register:any = FormGroup;


  constructor(private fb:FormBuilder, private router: Router, private common: CommonService) { }

  ngOnInit(): void {
    this.register= this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      age:['',Validators.required],
      deptno:['',Validators.required],
      job:['',Validators.required]
    })
  }

    registerSubmit(data:any){
      let dataToPass={
        name:data.name,
        email: data.email,
        age: data.age,
        password: data.password,
        job: data.job,
        deptno: data.deptno
      }
      this.common.addUser(dataToPass).subscribe((data:any)=>{
        console.log(data);
      })
      alert("Successfully Registered! Now you can log in!");
      this.register.reset();
    }


    gotoLogin(){
      this.router.navigate(['/login']);
    }

    resetform(){
      this.register.reset();
    }
}
