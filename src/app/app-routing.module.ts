import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliciesManagerComponent } from './policies-manager/policies-manager.component';
import { UsersPoliciesComponent } from './users-policies/users-policies.component';

const routes: Routes = [
  {
    path: 'policies',
    component: PoliciesManagerComponent
  },
  {
    path: 'user-policies',
    component: UsersPoliciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
