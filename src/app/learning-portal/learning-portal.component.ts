import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-portal',
  templateUrl: './learning-portal.component.html',
  styleUrls: ['./learning-portal.component.css']
})
export class LearningPortalComponent implements OnInit {
  selectedMenu: any = 'Dashboard';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goTo(paramText: string) {
    this.selectedMenu = paramText
  }
}
