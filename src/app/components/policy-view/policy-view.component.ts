import { Component, OnInit } from '@angular/core';
import { CoverageService } from '../../services/coverage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PolicyService } from '../../services/policy.service';
import { timeout } from 'q';
import { timer } from 'rxjs';

@Component({
  selector: 'app-policy-view',
  templateUrl: './policy-view.component.html',
  styleUrls: ['./policy-view.component.scss'],
  providers: [CoverageService, PolicyService]
})
export class PolicyViewComponent implements OnInit {

  coverageTypes: Array<any>;
  coverages: Array<any>;
  formState: any;
  showMessage = false;
  errorMessage = null;

  constructor(private coverageService: CoverageService,
              private formBuilder: FormBuilder,
              private policyService: PolicyService) { }

  ngOnInit() {

    // getting initial data
    this.coverages = new Array<any>();
    this.initForm();
    this.coverageService.getAllCoverages()
      .subscribe((coverages: Array<any>) => this.coverageTypes = coverages);

  }

  addNewCoverage() {
    this.formState.controls.coveringPolicy.value.push({
      coveringId: 0,
      porcentage: 0
    });
  }

  initForm() {
    this.formState = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startingDate: ['', Validators.required],
      coveragePeriod: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(1)]],
      riskType: ['Low', Validators.required],
      coveringPolicy: [[], Validators.length > 0],
      fake: ['']
    });
  }

  onSubmit() {
      if (this.validation()) {
        this.policyService.savePolicy(this.formState.value)
        .subscribe(result => {
          this.showMessage = true;
          timer(2000)
            .subscribe(() => location.reload());
        });
      }
  }

  validation() {
    // empty coverage values
    if (this.formState.value.coveringPolicy.length === 0  ||
        (this.formState.value.coveringPolicy.length > 0 &&
          (this.formState.value.coveringPolicy
            .find(item => !item.coveringId || !item.porcentage)))) {
      this.errorMessage = 'Please choose almost one coverage';
      timer(2000)
        .subscribe(() => this.errorMessage = null);
      return false;
    }

    // high coverage validation
    if (this.formState.value.riskType === 'High') {
      const highPorcentage = this.formState.value.coveringPolicy
        .find(item => Number.parseInt(item.porcentage, 10) > 50);
      if (highPorcentage) {
        this.errorMessage = 'High risk policy cannot have coverage percentage higher than 50%';
        timer(2000)
        .subscribe(() => this.errorMessage = null);
        return false;
      }
    }
    return true;
  }
}
