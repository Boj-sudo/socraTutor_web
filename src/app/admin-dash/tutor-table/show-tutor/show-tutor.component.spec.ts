import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTutorComponent } from './show-tutor.component';

describe('ShowTutorComponent', () => {
  let component: ShowTutorComponent;
  let fixture: ComponentFixture<ShowTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
