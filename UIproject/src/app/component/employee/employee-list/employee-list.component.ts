import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employeeData : Employee[] = [
    // {
    //   id:'5b4dc-6hjj-7jkjk-8kkjkj-0jajhh',
    //   name:'jamal',
    //   email:'jamal@hotmail.com',
    //   phone:2322,
    //   salary:5000,
    //   department:'MIS'
    // },
    // {
    //   id:'3b4dc-6hjj-7jkjk-8kkjkj-0jajhh',
    //   name:'jamal khan',
    //   email:'jamalkhan@hotmail.com',
    //   phone:232255,
    //   salary:50005,
    //   department:'MIS'
    // },
  ]

  constructor(private empServices: EmployeeService) { }

  ngOnInit(): void {

    this.empServices.getEmployeeDataFromApi()
        .subscribe({
          next:(empData)=>{
              //console.log(employeeData);
              this.employeeData = empData;
          },
          error:(response)=>{
            console.log(response);
          }
          
        })
  }

}
