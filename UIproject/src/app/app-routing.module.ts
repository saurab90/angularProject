import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';

import { AddEmployeeComponent } from './component/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './component/employee/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'',
    component: EmployeeListComponent
  },
  {
    path:'employee',
    component: EmployeeListComponent
  },
  {
    path:'employee/add',
    component: AddEmployeeComponent
  },
  {
    path:'employee/edit/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
