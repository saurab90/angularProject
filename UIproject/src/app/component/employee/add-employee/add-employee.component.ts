import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmpRequest: Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  constructor(private empservices: EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  addEmployeeData(){
    //console.log(this.addEmpRequest);
    this.empservices.addEmployeeDataUseApi(this.addEmpRequest)
        .subscribe({
          next:(empData)=>{
              console.log(empData);
              this.router.navigate(['employee']); // route the default view
          },
          error:(response)=>{
            console.log(response);
          }
          
        });
       
  }

}
