import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifesciTutorsComponent } from './lifesci-tutors.component';

describe('LifesciTutorsComponent', () => {
  let component: LifesciTutorsComponent;
  let fixture: ComponentFixture<LifesciTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifesciTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifesciTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
