import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee? : Employee 
  constructor(
    private route : ActivatedRoute,
    private location : Location, 
    private employeeService : EmployeeService,
    private formBuilder : FormBuilder
  ) { }

  employeeForm = this.formBuilder.group(
    {
      name : this.employee?.name,
      email : this.employee?.email, 
      jobTitle : this.employee?.jobTitle,
      phone : this.employee?.phone
    }
  ) ;
  ngOnInit(): void {
    this.getEmployee(); 
  }

  goBack() : void 
  {
    this.location.back() ; 
  }

  getEmployee() : void 
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee); 
  }

  addEmployee( n : string, e :string) : void 
  {
    let nEmployee: Employee = new Employee(n, e);

    this.employeeService.addEmployee(nEmployee)
    .subscribe(() => this.goBack()) ; 
  }



  saveEmployee(): void 
  {
    if(this.employee)
    {
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => this.goBack()
      );
    }
  }

}
