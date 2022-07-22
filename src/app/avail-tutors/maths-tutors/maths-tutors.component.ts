import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-tutors',
  templateUrl: './maths-tutors.component.html',
  styleUrls: ['./maths-tutors.component.css']
})
export class MathsTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':1,'name':'Mr Moodly','description':'','image':'../../assets/tut_1.jpg'},
    {'id':2,'name':'Mr Cotterrel','description':'','image':'../../assets/tut_5.jpg'},
    {'id':3,'name':'Ms W Rosenberg','description':'','image':'../../assets/tut_6.jpg'},
    {'id':4,'name':'Mr Smith','description':'','image':'../../assets/tut_18.png'}
  ]
}
