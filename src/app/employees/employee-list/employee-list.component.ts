import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];
  employeeService: EmployeeService = inject(EmployeeService);
  routerService: Router = inject(Router);

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe({
        next: (data) => this.employeeList = data
      });
  }

  onSelectEmployee(employee: Employee): void {
    console.log(employee);
    this.routerService.navigate(['employees', employee.id]);
  }
}
