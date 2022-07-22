import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticsTutorsComponent } from './informatics-tutors.component';

describe('InformaticsTutorsComponent', () => {
  let component: InformaticsTutorsComponent;
  let fixture: ComponentFixture<InformaticsTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformaticsTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformaticsTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
