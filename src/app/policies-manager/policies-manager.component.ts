import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-policies-manager',
  templateUrl: './policies-manager.component.html',
  styleUrls: ['./policies-manager.component.scss'],
  providers: [ PolicyService ]
})
export class PoliciesManagerComponent implements OnInit {

  policies: Array<any>;
  messageView = null;

  constructor(private policyService: PolicyService) {
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.getPolicies();
  }

  private getPolicies() {

    this.policyService.getAllPolicies()
      .subscribe((policies: Array<any>) => this.policies = policies);

  }

  private deletePolicy(policyId) {
    this.policyService.deletePolicy(policyId)
      .subscribe(result => {
        this.messageView = `Policy #${policyId} was deleted succesfully`;
        this.getPolicies();
      });
  }

}
