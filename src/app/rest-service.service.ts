import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  getJoke(){
    return this.http.get(
        'https://official-joke-api.appspot.com/random_joke' 
    );
}
getBitcoin(){
  return this.http.get(
      'https://api.coindesk.com/v1/bpi/currentprice.json' 
  );
}
getWho(){
  return this.http.get(
      'http://ipwho.is/' 
  );
}
getip(){
  return this.http.get(
      'http://api.ipify.org/?format=json' 
  );
}
getgeo(ip:any){
  return this.http.get(
      'https://ipinfo.io/'+ip+'/geo' 
  );
}




}
