import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees : Employee[] ;

  @Input() employee?: Employee 

  constructor(
    private employeeService : EmployeeService,
    private route : ActivatedRoute
  ){
    this.employees = [] ; 
  }

  ngOnInit(): void {
    this.getEmployees() ; 
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addEmployee(employee : Employee): void 
  {
    this.employeeService.addEmployee(employee).subscribe(
      (response : Employee ) => {
        console.log(response);
      },
      (error : HttpErrorResponse) => {
        alert(error.message); 
      }
    );
  }

  public deleteEmployee(id : number): void{
    this.employeeService.deleteEmployee(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }      
    );
  }
}
