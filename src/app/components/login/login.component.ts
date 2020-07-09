import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/Register-service';
import { Login } from '../../model/store';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { Key } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  loginmodel = new Login("", "");
  tryToSubmit = false;
  wrongPassword = false;
  noUser = false;
  res: string
  submitForm(f: NgForm) {
    if (f.valid) {
      debugger
      this.registerService.isUserExist(this.loginmodel).subscribe(
        (response: string) => {
          this.res = response
          if ( parseInt(this.res, 10 )) {//אם יש כזה משתמש עם כזאת סיסמא
            debugger
            this.loginmodel.PasswordUser=this.res;
            this.authService.LoginAuth(this.loginmodel);
           
            alert(`welcome${this.authService.getUser.toString()}`)
          }
          else if (this.res == "no password") {
            alert("הסיסמא שגויה");
            this.loginmodel.PasswordUser = ""
          }
          // else {
          //   this.router.navigate(['register-component'])

          // }
        }, (error) => console.log(error))
    }
    else {

      this.tryToSubmit = true;

    }
  }

  // else {
  //   this.registerService.IsThePasswordWrong(this.loginmodel).subscribe((respone: Response) => {
  //     if (response) {//אם הסיסמא שגויה
  //       this.wrongPassword = true;

  //     }
  // else {
  //   this.noUser = true;
  // }

  //   },
  //     (error) => console.log(error));

  // }

  // },
  //   (error) => console.log(error));



  forgetPassword() {
    this.registerService.resetPassword(this.loginmodel.Email).subscribe((response: Response) => {
      if (response) {
        alert("הסיסמא שלך שונתה בהצלחה ונשלחה למייל");
      }
      else {
        alert("שגיאה בשינוי הסיסמא");

      }
    })
  }
}
