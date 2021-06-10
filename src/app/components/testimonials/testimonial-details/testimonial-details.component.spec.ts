import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialDetailsComponent } from './testimonial-details.component';

describe('TestimonialDetailsComponent', () => {
  let component: TestimonialDetailsComponent;
  let fixture: ComponentFixture<TestimonialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
