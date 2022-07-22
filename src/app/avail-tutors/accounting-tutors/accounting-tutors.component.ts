import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting-tutors',
  templateUrl: './accounting-tutors.component.html',
  styleUrls: ['./accounting-tutors.component.css']
})
export class AccountingTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':1,'name':'Ms M Rostoll','image':'../../assets/tut14.jpg'},
    {'id':2,'name':'Mr Lebea','image':'../../assets/tut_2.jpg'},
    {'id':3,'name':'Ms Njenga','image':'../../assets/tut_13.jpg'},
    {'id':4,'name':'Mr Coulter','image':'../../assets/tut_4.jpg'}
  ]
}
