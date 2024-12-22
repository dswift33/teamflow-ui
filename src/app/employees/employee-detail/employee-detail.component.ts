import { Component, inject, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-detail',
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
  employeeService: EmployeeService = inject(EmployeeService);
  employee: Employee | undefined;

  @Input()
  set id(employeeId: number) {
    this.employeeService.findById(employeeId).subscribe({
      next: (emp) => this.employee = emp
    });
  }  
}
