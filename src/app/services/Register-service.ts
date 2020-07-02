import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { observable, Observable, from } from 'rxjs'
import { Login } from '../model/store';
import { Store } from '../model/store'
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = environment.API_URL + '/Register';

  constructor(private http: HttpClient) { }

  isUserExist(loginDetails:Login) {//האם יש כזה משתמש עם כזאת סיסמא
    return this.http.post(this.url  + "/IsUser" ,loginDetails)
  }
  IsThePasswordWrong(register:Login){//האם יש כזה משתמש עם סיסמא אחרת
    return this.http.post(this.url+"/IsThePasswordWrong",register);
  }
  addStore(register:Store) {//הוספת משתמש
    debugger
    return this.http.post(this.url+"/AddStore", register);

  }

  

  resetPassword(email:string){
    return this.http.get(this.url+"/ResetPassword?email=" + email);
  }
}
