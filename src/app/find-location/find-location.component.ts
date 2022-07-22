import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-find-location',
  templateUrl: './find-location.component.html',
  styleUrls: ['./find-location.component.css']
})
export class FindLocationComponent implements OnInit {
  title = 'google-map';

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCowfzSYNrnMinblA2OZc8vfh9w6G_EtRk'
    })

    loader.load().then(() =>{
      new google.maps.Map(document.getElementById("map") as HTMLElement,{
        center: {lat: 51.233334, lng: 6.78333},
        zoom: 6
      })
    })
  }
}
