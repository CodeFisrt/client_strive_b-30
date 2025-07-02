import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/Constant';
import { EmployeeModel } from '../models/class/employee.model';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/interface/api.mode';

@Injectable({
  providedIn: 'root'
})
export class Employee {

  constructor(private http: HttpClient) { }

  
  getAllEmployees():Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL+ Constant.API_METHODS.EMPLOYEE.GET_ALL);
  }

  createNewEmployee(obj: EmployeeModel) :Observable<ApiResponseModel>{
     debugger;
    return this.http.post<ApiResponseModel>(environment.API_URL + Constant.API_METHODS.EMPLOYEE.NEW_EMPLOYEE,obj)
  }
}
