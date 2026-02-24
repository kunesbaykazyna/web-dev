import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // Добавьте этот импорт

bootstrapApplication(AppComponent, appConfig) // Передайте AppComponent первым
  .catch((err) => console.error(err));