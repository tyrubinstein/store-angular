import { Injectable, Output, EventEmitter } from '@angular/core';
import { Login } from '../model/store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router) { }

  @Output() getLoggedInName: EventEmitter<boolean> = new EventEmitter();
  @Output() getIsCompany: EventEmitter<boolean> = new EventEmitter();
  //התחברות
  LoginAuth(user: string, iscomp :string) {
    localStorage.setItem('currentUser', user);
    localStorage.setItem('iscompany', iscomp);
    this.router.navigate(["/home-page-component"]);
    this.getLoggedInName.emit(true);
    if(iscomp='yes')
    this.getIsCompany.emit(true)
   else
      this.getIsCompany.emit(false)
    
  }
  isAuth() {
  if(localStorage.getItem('currentUser'))
  return true;
  }
  iscomp() {
   if( localStorage.getItem('iscompany')=='yes')
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
        localStorage.removeItem('iscompany');
    this.router.navigate(["/login-component"]);

    }
}
