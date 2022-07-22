import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  name !: string;
  email !: string;
  message !: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.router.navigate(['payment']);
  }
}
