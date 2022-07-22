import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avail-tutors',
  templateUrl: './avail-tutors.component.html',
  styleUrls: ['./avail-tutors.component.css']
})
export class AvailTutorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tutor = [
    {'id':1,'name':'Mr Moodly','image':'../../assets/tut_1.jpg'},
    {'id':2,'name':'Mr Lebea','image':'../../assets/tut_2.jpg'},
    {'id':3,'name':'Mr Maluleka','image':'../../assets/tut_3.jpg'},
    {'id':4,'name':'Mr Coulter','image':'../../assets/tut_4.jpg'},
    {'id':5,'name':'Mr Cotterrell','image':'../../assets/tut_5.jpg'},
    {'id':6,'name':'Ms Miller','image':'../../assets/tut_6.jpg'},
    {'id':7,'name':'Mrs Thobakgale','image':'../../assets/tut_7.jpg'},
    {'id':8,'name':'Ms Ncube','image':'../../assets/tut_8.jpg'},
    {'id':9,'name':'Ms W Rosenberg','image':'../../assets/tut_9.jpg'},
    {'id':10,'name':'Mrs A Sheik','image':'../../assets/tut_10.jpg'},
    {'id':11,'name':'Ms Huneberg','image':'../../assets/tut_11.jpg'},
    {'id':12,'name':'Ms J Sibeko','image':'../../assets/tut_12.jpg'},
    {'id':13,'name':'Ms Njenga','image':'../../assets/tut_13.jpg'},
    {'id':14,'name':'Ms M Rostoll','image':'../../assets/tut14.jpg'},
    {'id':15,'name':'Ms Leung','image':'../../assets/tut_15.png'},
    {'id':16,'name':'Ms K Mufamadi','image':'../../assets/tut_16.png'},
    {'id':17,'name':'Ms Jayrem','image':'../../assets/tut_17.jpg'},
    {'id':18,'name':'Mr Smith','image':'../../assets/tut_18.png'}
  ]
}
