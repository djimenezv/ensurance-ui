import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) {


  }

  getAllPolicies() {
    return this.http.get(`${environment.apiUrl}/policy`);
  }

  savePolicy(policy) {
    return this.http.post(`${environment.apiUrl}/policy`, policy);
  }

  deletePolicy(policyId) {
    return this.http.delete(`${environment.apiUrl}/policy/${policyId}`);
  }

}
