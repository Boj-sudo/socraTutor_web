import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTutorsComponent } from './stats-tutors.component';

describe('StatsTutorsComponent', () => {
  let component: StatsTutorsComponent;
  let fixture: ComponentFixture<StatsTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
