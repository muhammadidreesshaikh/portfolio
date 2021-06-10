import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonialsComponent } from './testimonials.component';
import { TestimonialListingComponent } from './testimonial-listing/testimonial-listing.component';
import { TestimonialDetailsComponent } from './testimonial-details/testimonial-details.component';
import { CreateTestimonialComponent } from './create-testimonial/create-testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialsComponent,
    children: [
      {
        path: '',
        component: TestimonialListingComponent
      },
      {
        path: 'testimonial-listing',
        component: TestimonialListingComponent
      },
      {
        path: 'testimonial-details',
        component: TestimonialDetailsComponent
      },
      {
        path: 'create-testimonial',
        component: CreateTestimonialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
