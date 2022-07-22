import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-tutors',
  templateUrl: './stats-tutors.component.html',
  styleUrls: ['./stats-tutors.component.css']
})
export class StatsTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':1,'name':'Mrs A Sheik','image':'../../assets/tut_10.jpg'},
    {'id':2,'name':'Mrs Thobakgale','image':'../../assets/tut_7.jpg'},
    {'id':3,'name':'Ms K Mufamadi','image':'../../assets/tut_16.png'},
    {'id':4,'name':'Ms Njenga','image':'../../assets/tut_13.jpg'}
  ]
}
