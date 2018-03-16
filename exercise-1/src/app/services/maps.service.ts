import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MapsService {

  private URL: string = null;
  private API_KEY: string = 'AIzaSyC2sQoPh8AnaU7WBrFGH3bR0r7UQ1Jmb-c';

  constructor(private http: Http) { }

  getLocation(lat: string, lng: string){
    this.URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng + '&key='+this.API_KEY;
    // let headers = new Headers([
    //   {'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    //   },
    // ]);
    // let options = new RequestOptions({headers: headers});
     return this.http.get(this.URL)
                .map((data: Response) => {
                  let respones = data.json();
                  return respones;
                },
              );
    }
}
