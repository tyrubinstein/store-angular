import { Injectable, Output, EventEmitter } from '@angular/core';
import { Login } from '../model/store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  @Output() getLoggedInName: EventEmitter<boolean> = new EventEmitter();

  //התחברות
  LoginAuth(user: string) {
    localStorage.setItem('currentUser', user);
    this.router.navigate(["/home-page-component"]);
    this.getLoggedInName.emit(true);
  }
  isAuth() {
  if(localStorage.getItem('currentUser'))
  return true;
  }
  getUser() {
    return localStorage.getItem('currentUser');
  }
  getUserId(): number {
    return parseInt(this.getUser());
  }
    logout() {
        localStorage.removeItem('currentUser');
    this.router.navigate(["/login-component"]);

    }
}
