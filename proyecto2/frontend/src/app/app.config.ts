import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),


    // ----------------------------- gestión de mensajes
    provideAnimations(),
    provideToastr(),

    // -----------------------------
    // Es el que nos permite hacer peticiones a nuestro backend
    provideHttpClient(),
  ]
};



