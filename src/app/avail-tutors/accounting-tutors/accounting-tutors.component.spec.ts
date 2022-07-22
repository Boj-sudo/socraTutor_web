import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingTutorsComponent } from './accounting-tutors.component';

describe('AccountingTutorsComponent', () => {
  let component: AccountingTutorsComponent;
  let fixture: ComponentFixture<AccountingTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
