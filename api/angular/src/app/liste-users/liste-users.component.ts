import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
   
@Component({
  selector: 'app-liste-users',
  template: `
    <section class="section">
         <div class="container">
            <div class="columns is-multiline">
               <div class="column is-3" v-for="(user, index) in users" v-bind:key="index">
                  <a routerLink="/">
                     <div class="card navbar-item">
                        <div class="card-content">
                           michel
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
export class ListeUsersComponent implements OnInit {
   
  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUsers()
      .subscribe(user => {
         console.log(user)
      })
  }

}
