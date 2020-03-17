import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-page',
  template: `
    <div>
      <p id="page">{{ this.page }}</p>
   </div>
  `,
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page: string;

  constructor(private route:ActivatedRoute, private contentService: ContentService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.page = this.contentService.getContent(params.page)
    })

  }

}
