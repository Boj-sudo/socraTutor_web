import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comscie-tutors',
  templateUrl: './comscie-tutors.component.html',
  styleUrls: ['./comscie-tutors.component.css']
})
export class ComscieTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':1,'name':'Mr Cotterrell','image':'../../assets/tut_5.jpg'},
    {'id':2,'name':'Ms W Rosenberg','image':'../../assets/tut_9.jpg'},
    {'id':3,'name':'Mrs Huneberg','image':'../../assets/tut_11.jpg'},
    {'id':4,'name':'Mr Coulter','image':'../../assets/tut_4.jpg'}
  ]
}
