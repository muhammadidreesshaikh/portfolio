import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportPolicyComponent } from './support-policy.component';

const routes: Routes = [
  { path: '', component: SupportPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportPolicyRoutingModule { }
