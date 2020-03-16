import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="./assets/images/logo.png" alt="navbar logo">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a routerLink="/" class="navbar-item">Home</a>
          <a routerLink="about" class="navbar-item">About</a>
        </div>
      </div>

    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
