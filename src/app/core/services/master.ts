import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_ROLES)
  }

   getDesignations() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_DESIGNATION)
  }
}
