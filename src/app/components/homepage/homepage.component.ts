import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public userdetails:{  id: number; name: string; age: number; email: string, job: string, deptno: number }[] | undefined;

  public employees: { id: number; name: string; age: number; email: string, job: string, deptno: number }[] | undefined;


  constructor(private _employeeService: EmployeeService, private newUsers: CommonService, private router:Router) { }

  ngOnInit(): void {
    this.employees= this._employeeService.getEmployees();

    this.newUsers.getUser().subscribe((data:any)=>{
     this.userdetails=data;
    });
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
