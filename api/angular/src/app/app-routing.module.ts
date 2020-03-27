import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';


const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "users",
    component: ListeUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
