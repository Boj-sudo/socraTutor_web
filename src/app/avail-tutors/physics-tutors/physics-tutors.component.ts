import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physics-tutors',
  templateUrl: './physics-tutors.component.html',
  styleUrls: ['./physics-tutors.component.css']
})
export class PhysicsTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tutor = [
    {'id':1,'name':'Mr Moodly','image':'../../assets/tut_1.jpg'},
    {'id':2,'name':'Ms Ncube','image':'../../assets/tut_8.jpg'},
    {'id':3,'name':'Ms Huneberg','image':'../../assets/tut_11.jpg'},
    {'id':4,'name':'Mr Coulter','image':'../../assets/tut_4.jpg'}
  ]
}
