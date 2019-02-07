import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoliciesManagerComponent } from './policies-manager/policies-manager.component';
import { UsersPoliciesComponent } from './users-policies/users-policies.component';
import { PolicyViewComponent } from './components/policy-view/policy-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PoliciesManagerComponent,
    UsersPoliciesComponent,
    PolicyViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
