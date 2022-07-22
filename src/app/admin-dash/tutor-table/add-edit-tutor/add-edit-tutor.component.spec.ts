import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTutorComponent } from './add-edit-tutor.component';

describe('AddEditTutorComponent', () => {
  let component: AddEditTutorComponent;
  let fixture: ComponentFixture<AddEditTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
