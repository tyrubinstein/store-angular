import { Injectable } from '@angular/core';
import { Login } from '../model/store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  loggedIn = false;
  //התחברות
LoginAuth(user:Login){
  this.loggedIn=true;
  localStorage.setItem('currentUser', JSON.stringify(user));
  this.router.navigate(["/home-page-component"]);

}
  isAuth(){
      return this.loggedIn;
  }
getUser()
{
 return localStorage.getItem('currentUser');
}
}
