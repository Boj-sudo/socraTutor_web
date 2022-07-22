import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsTutorsComponent } from './physics-tutors.component';

describe('PhysicsTutorsComponent', () => {
  let component: PhysicsTutorsComponent;
  let fixture: ComponentFixture<PhysicsTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicsTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
