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
//     const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
// let body = new HttpParams();
// body = body.set('StoreName', register.StoreName);
// body = body.set('Address', register.Address);
// body = body.set('City', register.City);
// body = body.set('ManagerName', register.ManagerName);
// body = body.set('Cell', register.Cell);
// body = body.set('Email', register.Email);
// body = body.set('PasswordUser', register.PasswordUser);
// body = body.set('cellOftheStore', register.cellOftheStore);

    return this.http.post(this.url+"/AddStore", register);

  }

  

  resetPassword(email:string){
    return this.http.get(this.url+"/ResetPassword?email=" + email);
  }
}
