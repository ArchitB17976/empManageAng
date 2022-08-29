import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeServe } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  ngOnInit() { this.getEmployees(); }

  public employees: Employee[] = [];

  constructor(private empService: EmployeeServe){}

  public getEmployees(): void
  {
    this.empService.getEmployees().subscribe(
      (response: Employee[]) => { this.employees = response; },
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }
}
