import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GetticketsService {

  constructor(private http: HttpClient) { }
  incUrl = 'https://dev70643.service-now.com/api/now/v1/table/incident';
  access_token = localStorage.getItem('access_token');
  reqHeader = new HttpHeaders({ 'Authorization': 'Bearer '+this.access_token, 'No-Auth':'True'});
  getIncidents() {
    return this.http.get(this.incUrl, { headers: this.reqHeader });
  }
}
