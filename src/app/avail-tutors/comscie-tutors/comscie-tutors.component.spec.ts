import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComscieTutorsComponent } from './comscie-tutors.component';

describe('ComscieTutorsComponent', () => {
  let component: ComscieTutorsComponent;
  let fixture: ComponentFixture<ComscieTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComscieTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComscieTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
