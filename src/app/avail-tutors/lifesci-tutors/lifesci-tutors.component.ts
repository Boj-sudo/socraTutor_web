import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifesci-tutors',
  templateUrl: './lifesci-tutors.component.html',
  styleUrls: ['./lifesci-tutors.component.css']
})
export class LifesciTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':1,'name':'Ms Ncube','image':'../../assets/tut_8.jpg'},
    {'id':2,'name':'Ms Huneberg','image':'../../assets/tut_11.jpg'},
    {'id':3,'name':'Mr Smith','image':'../../assets/tut_18.png'},
    {'id':4,'name':'Ms Leung','image':'../../assets/tut_15.png'}
  ]
}
