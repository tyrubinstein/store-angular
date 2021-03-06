import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterService } from 'src/app/services/Register-service';
import { Login } from '../../model/store';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { Key } from 'protractor';
import { parse } from 'path';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }
  @Output() login = new EventEmitter<boolean>();
  iscompany: boolean;
  loginmodel = new Login("", "");
  tryToSubmit = false;
  wrongPassword = false;
  noUser = false;
  res: string
  iscomp: string;
  submitForm(f: NgForm) {
    if (f.valid) {
      if (!this.iscompany) {
        this.registerService.isUserExist(this.loginmodel).subscribe(
          (response: string) => {
            this.res = response
            if (parseInt(this.res, 10)) {//אם יש כזה משתמש עם כזאת סיסמא

              this.authService.LoginAuth(this.res, this.iscomp);
              this.login.emit(true);

              alert(`welcome${this.authService.getUser()}`)
            }
            else if (this.res == "no password") {
              alert("הסיסמא שגויה");
              this.loginmodel.PasswordUser = ""
            }
            else{ alert("לא קיים שם משתמש זה במערכת");}
            // else {
            //   this.router.navigate(['register-component'])

            // }
          }, (error) => console.log(error));
      }

      else {
        this.registerService.isCompExist(this.loginmodel).subscribe(
          (response: string) => {
            this.res = response
            if (parseInt(this.res, 10)) {//אם יש כזה משתמש עם כזאת סיסמא

              this.authService.LoginAuth(this.res, this.iscomp);
              this.login.emit(true);

              alert(`welcome${this.authService.getUser()}`)
            }
            else if (this.res == "no password") {
              alert("הסיסמא שגויה");
              this.loginmodel.PasswordUser = ""
            }
            else{ alert("לא קיים שם משתמש זה במערכת");}
            // else {
            //   this.router.navigate(['register-component'])

            // }
          }, (error) => console.log(error))
      }
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
