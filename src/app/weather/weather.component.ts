import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from "../weather.service";
import { CommonModule } from '@angular/common';
import { RestServiceService } from '../rest-service.service';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[WeatherService,RestServiceService],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})



export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public locationSearchForm!: FormGroup;
  public weatherData: any;
  public locationData: any;
  public city: any;
  public ip:any;
  constructor(private formBuilder: FormBuilder, private apixuService: WeatherService,private rest:RestServiceService) { 
  }
  ngOnInit() {
    this.locationSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.weatherSearchForm = this.formBuilder.group({
      latitude: [''],longitude: ['']
    });
    this.rest.getip().subscribe((data:any)=>{this.ip=data.ip;this.rest.getgeo(this.ip).subscribe((res:any)=>{this.city=res.city;this.apixuService
      .getLocation(this.city)
      .subscribe(loc => {this.locationData=loc;console.log(this.locationData); this.apixuService.getWeather(this.locationData?.results[0].latitude,this.locationData?.results[0].longitude)
        .subscribe(wt => {this.weatherData=wt;console.log(this.weatherData);} );})})});
  }

  APIgetWeather(formValues:any) {

      this.apixuService
      .getWeather(formValues.latitude,formValues.longitude)
      .subscribe(data => {this.weatherData=data;console.log(this.weatherData);} );

  
  }

  APIgetLocation(formValues:any) {

    this.apixuService
      .getLocation(formValues.location)
      .subscribe(data => {this.locationData=data;console.log(this.locationData);});
      
  
  }

  getRange(n: number): number[] {
    return Array.from({length: n}, (_, i) => i + 1);
  }
}
