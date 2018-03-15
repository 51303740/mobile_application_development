import { Component } from '@angular/core';
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
  //sug_locations: any = [];
  location: string = null;
  api_key = "AIzaSyC2sQoPh8AnaU7WBrFGH3bR0r7UQ1Jmb-c"
  constructor(private http: Http, private maps_service: MapsService){
  }

  onClick(){
    this.maps_service.getLocation(this.lat, this.lng)
        .subscribe(data =>{
          console.log(data.results[0].formatted_address);
          // for(let i = 1; i < data.results.length; i++){
          //    this.sug_locations.push(data.results[i].formatted_address);
          //    let locations: any[] = this.sug_locations;
          // }
          for(let i = 0; i < data.results.length; i++){
            this.location = data.results[0].formatted_address;
          }
        })
  }
}
