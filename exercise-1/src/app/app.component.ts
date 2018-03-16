import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { MapsService } from "./services/maps.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: string = '10.7734596';
  lng: string = '106.6576259';
  error_status = '';
  //sug_locations: any = [];
  location: string = null;
  api_key = "AIzaSyC2sQoPh8AnaU7WBrFGH3bR0r7UQ1Jmb-c";

  constructor(private http: Http, private maps_service: MapsService){
  }

  ngOnInit(){
    this.onClick()
  }

  onClick(){
    this.maps_service.getLocation(this.lat, this.lng)
        .subscribe(data =>{
            for(let i = 0; i < data.results.length; i++){
              this.location = data.results[0].formatted_address;
            }
        },
        (error) =>{
            if (error.status === 400 || error.status === 404) {
              alert('error URL: Invalid \'lat,lng\' parameter');
            }
          }
      );
  }

 
}
