import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="columns is-mobile is-centered" *ngIf="user !== undefined">
        <div class="column is-half">

            <div class="card user">
              <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                          <img [src]="user.avatar_url" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{user.name || user.login}}</p>
                        <p class="subtitle is-6">@{{user.login}}</p>
                    </div>
                  </div>

                  <div class="content">
                    <span>{{user.created_at.split("T")[0]}}</span>
                    <br/>
                    <br/>
                    {{user.bio}}
                  </div>
              </div>
            </div>

        </div>
      </div>
  `,
  styles: []
})
export class UserComponent implements OnInit {
  user;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getSingleUser(params.user).subscribe(user => {
        this.user = user
      })

    })
  }

}
