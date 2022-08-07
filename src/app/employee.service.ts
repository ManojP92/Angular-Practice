import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1234,"name":"Penny", "age":26, "email":"penny@bigbang.theory", "password":"qwerta", "job":"Clerk", "deptno":20},
      {"id":1235,"name":"Billy", "age":28, "email":"billy@young.sheldon", "password":"qwertb", "job":"Analyst", "deptno":50},
      {"id":1236,"name":"Howard", "age":28, "email":"howard@bigbang.theory", "password":"qwertc", "job":"Clerk", "deptno":20},
      {"id":1237,"name":"Lenoard", "age":29, "email":"leanord@bigbang.theory", "password":"qwertd", "job":"Manager", "deptno":30},
      {"id":1238,"name":"Rajesh", "age":25, "email":"rajesh@bigbang.theory", "password":"qwerte", "job":"Salesman", "deptno":40},
      {"id":1239,"name":"Sheldon", "age":28, "email":"sheldon@bigbang.theory", "password":"qwertf", "job":"President", "deptno":10},
      {"id":1240,"name":"Manoj", "age":24, "email":"manoj@gmail.com", "password":"qwerty", "job":"President", "deptno":10}
    ]
  }
}
