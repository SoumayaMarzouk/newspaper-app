import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  providers:[RestServiceService],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit {
  public jokeData:any
  constructor(private joke:RestServiceService){}
  ngOnInit() {
      this.joke.getJoke().subscribe(data =>{this.jokeData=data;});

  }

  
}
