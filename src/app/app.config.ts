import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {Landmark, LucideAngularModule, MoveLeft, Plus, PlusCircle} from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
  importProvidersFrom(LucideAngularModule.pick({Plus, Landmark, MoveLeft}))]
};
