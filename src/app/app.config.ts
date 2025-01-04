import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
   
    ),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ]
};