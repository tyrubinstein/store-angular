import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn = false;
  //התחברות
LoginAuth(){
  this.loggedIn=true;
}
  isAuth(){
      return this.loggedIn;
  }

}
