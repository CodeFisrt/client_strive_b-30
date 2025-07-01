import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class Clinet {

  constructor(private http: HttpClient) { }

  getAllClient() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.CLIENT.GET_ALL);
  }
}
