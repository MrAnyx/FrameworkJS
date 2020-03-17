import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header id="navbar">
      <span><a routerLink="/">Angular</a></span>
      <ul>
         <li><a routerLink="/page1">Link 1</a></li>
         <li><a routerLink="/page2">Link 2</a></li>
         <li><a routerLink="/page3">Link 3</a></li>
         <li><a routerLink="/page4">Link 4</a></li>
      </ul>
   </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
