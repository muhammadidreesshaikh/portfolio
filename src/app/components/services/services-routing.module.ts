import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServiceListingComponent } from './service-listing/service-listing.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { CreateServiceComponent } from './create-service/create-service.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: ServiceListingComponent
      },
      {
        path: 'service-listing',
        component: ServiceListingComponent
      },
      {
        path: 'service-details',
        component: ServiceDetailsComponent
      },
      {
        path: 'create-service',
        component: CreateServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
