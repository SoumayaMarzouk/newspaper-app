import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

 
export class NewsServiceService {

  constructor(private http:HttpClient) { }
  getNews(cat:any){

        return this.http.get("https://newsapi.org/v2/top-headlines?category="+cat+"&country=us&sortBy=publishedAt&apiKey=bca0a4510fad4e55bc13d386de8fa174");

//bca0a4510fad4e55bc13d386de8fa174
}
}
