import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { allAppRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(allAppRoutes), provideClientHydration(),provideHttpClient()]
};
