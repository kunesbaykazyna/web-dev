import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true, 
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class User {
  readonly name = input<string>();
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-user name="Simran"></app-user> `,
  imports: [User],
})
export class App {}