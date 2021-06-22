import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPolicyComponent } from './support-policy.component';

describe('SupportPolicyComponent', () => {
  let component: SupportPolicyComponent;
  let fixture: ComponentFixture<SupportPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
