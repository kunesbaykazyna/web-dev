import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/albums">Albums</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
   newTitle = '';


}