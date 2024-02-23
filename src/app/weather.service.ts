

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getLocation(location:any){
   
    return this.http.get("https://geocoding-api.open-meteo.com/v1/search?name="+location);

  }


  getWeather(lt:any,lg:any){
    console.log("https://api.open-meteo.com/v1/forecast?latitude="+lt+"&longitude="+lg+"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
    return this.http.get("https://api.open-meteo.com/v1/forecast?latitude="+lt+"&longitude="+lg+"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");

  
  }
}
