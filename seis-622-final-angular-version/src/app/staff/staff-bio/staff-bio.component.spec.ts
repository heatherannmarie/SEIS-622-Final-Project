import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBioComponent } from './staff-bio.component';

describe('StaffBioComponent', () => {
  let component: StaffBioComponent;
  let fixture: ComponentFixture<StaffBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
