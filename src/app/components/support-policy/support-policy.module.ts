import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportPolicyRoutingModule } from './support-policy-routing.module';
import { SupportPolicyComponent } from './support-policy.component';


@NgModule({
  declarations: [SupportPolicyComponent],
  imports: [
    CommonModule,
    SupportPolicyRoutingModule
  ]
})
export class SupportPolicyModule { }
