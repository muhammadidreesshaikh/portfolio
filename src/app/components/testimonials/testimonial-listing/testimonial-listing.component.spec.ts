import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialListingComponent } from './testimonial-listing.component';

describe('TestimonialListingComponent', () => {
  let component: TestimonialListingComponent;
  let fixture: ComponentFixture<TestimonialListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
