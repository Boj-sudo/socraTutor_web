import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informatics-tutors',
  templateUrl: './informatics-tutors.component.html',
  styleUrls: ['./informatics-tutors.component.css']
})
export class InformaticsTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':1,'name':'Ms Jayrem','image':'../../assets/tut_17.jpg'},
    {'id':2,'name':'Mr Smith','image':'../../assets/tut_18.png'},
    {'id':3,'name':'Ms Miller','image':'../../assets/tut_6.jpg'},
    {'id':4,'name':'Mr Cotterrell','image':'../../assets/tut_5.jpg'}
  ]
}
