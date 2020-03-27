import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <section class="hero is-success is-bold is-medium">
        <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                  Vue application
              </h1>
              <div class="subtitle has-text-centered">
                  <a class="button is-white" routerLink="users">List of Users</a>
                  <a class="button is-white" routerLink="user/MrAnyx">My Info</a>
              </div>
            </div>
        </div>
      </section>
  `,
  styles: [`
  .button {
     margin: 20px 10px;
  }`]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
