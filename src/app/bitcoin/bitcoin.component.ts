import { Component, OnInit } from '@angular/core';
import {RestServiceService} from '../rest-service.service'
@Component({
  selector: 'app-bitcoin',
  standalone: true,
  imports: [],
  providers:[RestServiceService],
  templateUrl: './bitcoin.component.html',
  styleUrl: './bitcoin.component.css'
})
export class BitcoinComponent implements OnInit{
  public bitData:any;
  constructor(private bit:RestServiceService){}
  ngOnInit(){
  this.bit.getBitcoin().subscribe(data => this.bitData=data);
  }

}
