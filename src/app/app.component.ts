import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {JokeComponent} from './joke/joke.component';
import {BitcoinComponent} from './bitcoin/bitcoin.component';
import {IpComponent} from './ip/ip.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JokeComponent,BitcoinComponent,IpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newspaper-app';
}
