import { Component,OnInit} from '@angular/core';
import {RestServiceService} from '../rest-service.service'
@Component({
  selector: 'app-ip',
  standalone: true,
  imports: [],
  providers:[RestServiceService],
  templateUrl: './ip.component.html',
  styleUrl: './ip.component.css'
})
export class IpComponent implements OnInit{
  public ipData:any
  constructor(private ip:RestServiceService){}
  ngOnInit(){
      this.ip.getip().subscribe(data => this.ipData=data)
  }

}
