import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { CreateTestimonialComponent } from './create-testimonial/create-testimonial.component';
import { TestimonialListingComponent } from './testimonial-listing/testimonial-listing.component';
import { TestimonialDetailsComponent } from './testimonial-details/testimonial-details.component';


@NgModule({
  declarations: [TestimonialsComponent, CreateTestimonialComponent, TestimonialListingComponent, TestimonialDetailsComponent],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ]
})
export class TestimonialsModule { }
