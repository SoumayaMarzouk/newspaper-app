import { Component,OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  providers:[NewsServiceService],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
  public newsData:any;
  constructor(private news:NewsServiceService){}
  ngOnInit() {
      this.news.getNews("general").subscribe(data => this.newsData=data);
  }

}
