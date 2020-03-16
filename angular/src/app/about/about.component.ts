import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            About
          </h1>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero{
      background-image: url("./assets/images/background2.jpg") !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
