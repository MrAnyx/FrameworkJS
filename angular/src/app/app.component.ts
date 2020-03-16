import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <app-header></app-header>

    <!-- router get injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular';
}
