import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightLeft,
  Home,
  Landmark,
  LucideAngularModule,
  MoveLeft,
  Plus,
  PlusCircle,
  User,
  WalletMinimal
} from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
  importProvidersFrom(LucideAngularModule.pick({Plus, Landmark, MoveLeft, Home, ArrowRightLeft, User, WalletMinimal, ArrowLeft, ArrowRight}))]
};
