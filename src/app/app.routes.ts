import { Routes } from '@angular/router'
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

export const allAppRoutes: Routes = [
  { path: '', component: NewsComponent},{ path: 'weather', component: WeatherComponent}
];