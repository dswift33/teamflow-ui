import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "employees", component: EmployeeListComponent},
    {path: "employees/:id", component: EmployeeDetailComponent},
    {path: "admin", component: AdminHomeComponent}    
];
