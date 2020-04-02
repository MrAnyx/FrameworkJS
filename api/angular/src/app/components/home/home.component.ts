import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-success is-bold is-medium">
      <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
                React application
            </h1>
            <div class="subtitle has-text-centered">
                <a class="button is-white" routerLink="users">List of users</a>
                <a class="button is-white" routerLink="users/MrAnyx">My info</a>
            </div>
          </div>
      </div>
    </section>
  `,
  styles: [`
    .button {
      margin: 20px 10px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
