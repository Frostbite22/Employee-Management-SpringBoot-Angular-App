import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';


const routes : Routes = [
  {path : "employee/detail", component : EmployeeDetailComponent },
  {path : "employee/detail/:id", component : EmployeeDetailComponent },
  {path : '' , redirectTo : '/employees' , pathMatch : 'full'},
  {path : "employees", component : EmployeeComponent },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
