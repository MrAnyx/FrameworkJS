import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users-liste',
  template: `
    <section class="section">
         <div class="container">
            <div class="columns is-multiline">
              <div class="column is-3" *ngFor="let user of users | async">
                <a routerLink="{{user.login}}">
                    <div class="card">
                      <div class="card-content">
                        {{ user.login }} 
                      </div>      
                    </div>      
                </a>
              </div>
            </div>
         </div>
      </section>
  `,
  styles: []
})
export class UsersListeComponent implements OnInit {

  users; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }

}
