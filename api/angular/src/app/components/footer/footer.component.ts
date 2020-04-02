import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Made with 💕 by MrAnyx
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
