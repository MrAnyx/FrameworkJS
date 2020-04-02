import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://api.github.com/users?per_page=10")
  }

  getSingleUser(username: string){
    return this.http.get(`https://api.github.com/users/${username}`)
  }

}
