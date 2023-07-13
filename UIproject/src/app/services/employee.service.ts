import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getEmployeeDataFromApi() : Observable<Employee[]>
  {
     return  this.http.get<Employee[]>(this.baseApiUrl + 'api/Employe')
  }

  addEmployeeDataUseApi(empData:Employee): Observable<Employee>
  {
    empData.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(this.baseApiUrl + 'api/Employe',empData);
  }

  getEmployeeDataByIdFromApi(id: string) : Observable<Employee>
  {
     return  this.http.get<Employee>(this.baseApiUrl + 'api/Employe/'+ id);
  }
  updateEmployeeData(id: string, updateEmpReq: Employee) : Observable<Employee>
  {
     return  this.http.put<Employee>(this.baseApiUrl + 'api/Employe/'+ id,updateEmpReq);
  }


  deleteEmployeeData(id: string) : Observable<Employee>
  {
     return  this.http.delete<Employee>(this.baseApiUrl + 'api/Employe/'+ id);
  }

}
