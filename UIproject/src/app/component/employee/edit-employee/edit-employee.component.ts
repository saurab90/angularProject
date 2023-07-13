import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  
  editEmpRequest: Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private Router: ActivatedRoute, private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.Router.paramMap.subscribe({
      next:(param)=>{
        const id = param.get('id');  // id name must be same as parameter id name
        if(id){
          // call the edit api
          this.employeeService.getEmployeeDataByIdFromApi(id)
              .subscribe({
                next:(response)=>{
                    this.editEmpRequest = response;
                }
              })
        }
      }
    })
  }

  editEmployeeData(){
    this.employeeService.updateEmployeeData(this.editEmpRequest.id, this.editEmpRequest)
        .subscribe({
          next:(response)=>{
            this.router.navigate(['employee']); // route the default view
          }
        })
  }

  deleteEmpData(id:string){
    this.employeeService.deleteEmployeeData(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['employee']); // route the default view
      }
    })
  }

}
