import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryTutorsComponent } from './chemistry-tutors.component';

describe('ChemistryTutorsComponent', () => {
  let component: ChemistryTutorsComponent;
  let fixture: ComponentFixture<ChemistryTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemistryTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemistryTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
