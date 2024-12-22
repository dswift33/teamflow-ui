import { inject, Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'http://localhost:8080/api/v1/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  httpClient: HttpClient = inject(HttpClient);
  
  findById(employeeId: number) {
    return this.httpClient.get<Employee>(URL + '/' + employeeId, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa('user:password'), // Replace with valid credentials
      })
    });
  }

  getEmployees() {
    return this.httpClient.get<Employee[]>(URL, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa('user:password'), // Replace with valid credentials
      })
    });
  }

  employeeList: Employee[] = []
}
