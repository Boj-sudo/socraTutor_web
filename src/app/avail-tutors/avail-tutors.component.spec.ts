import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailTutorsComponent } from './avail-tutors.component';

describe('AvailTutorsComponent', () => {
  let component: AvailTutorsComponent;
  let fixture: ComponentFixture<AvailTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
