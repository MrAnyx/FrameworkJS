import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">
      <div class="navbar-brand">
         <a class="navbar-item" routerLink="">
            <img src="/assets/logo.png"/>
         </a>
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
