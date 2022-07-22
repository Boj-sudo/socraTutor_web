import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsTutorsComponent } from './maths-tutors.component';

describe('MathsTutorsComponent', () => {
  let component: MathsTutorsComponent;
  let fixture: ComponentFixture<MathsTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathsTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
