import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceListingComponent } from './service-listing/service-listing.component';


@NgModule({
  declarations: [ServicesComponent, CreateServiceComponent, ServiceDetailsComponent, ServiceListingComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
