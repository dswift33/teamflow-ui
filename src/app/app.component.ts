import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { HomeComponent } from './home/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HomeComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teamflow-ui';
}
