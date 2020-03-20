import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <p>Homepage</p>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
