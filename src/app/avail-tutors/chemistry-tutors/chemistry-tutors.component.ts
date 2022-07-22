import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chemistry-tutors',
  templateUrl: './chemistry-tutors.component.html',
  styleUrls: ['./chemistry-tutors.component.css']
})
export class ChemistryTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':3,'name':'Ms Sibeko','image':'../../assets/tut_12.jpg'},
    {'id':1,'name':'Mr Cotterrell','image':'../../assets/tut_5.jpg'},
    {'id':2,'name':'Mr Maluleka','image':'../../assets/tut_3.jpg'},
    {'id':4,'name':'Ms Miller','image':'../../assets/tut_6.jpg'}
  ]
}
