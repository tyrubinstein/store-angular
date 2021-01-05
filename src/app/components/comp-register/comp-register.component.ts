import { Component, OnInit } from '@angular/core';
  import { Store, Login } from '../../model/store'
  import { RegisterService } from '../../services/Register-service'
  import { FormsModule, NgForm } from '@angular/forms';
  import { Router } from '@angular/router';
  import { AuthService } from '../../services/auth.service'
import { Company } from 'src/app/model/cloth';

@Component({
  selector: 'app-comp-register',
  templateUrl: './comp-register.component.html',
  styleUrls: ['./comp-register.component.scss']
})
export class CompRegisterComponent implements OnInit {

    formSubmited = false//האם הפורם נשלח
    registermodel:Company=new Company;
    tryToSubmit = false
    constructor(private registerService: RegisterService, private router: Router, private authService: AuthService) { }
    ngOnInit(): void {
  
    }
  
    // addRegister(myname, mystoreName, myphone, storePhone, myaddres, myemail, mypassword, mycity) {
    // }
    submitForm(f: NgForm) {
      debugger
      if (f.valid) {
        this.registerService.addCompany(this.registermodel)
          .subscribe(
            (response:string) => {
              this.formSubmited = true
              if(response!="0"){
                  this.authService.LoginAuth(response, 'yes');
              alert(this.authService.getUserId().toString()+ "הוספת בהצלחה")
              }
            else{
              alert("יש כבר משתמש עם אימייל כזה במערכת")
            }
              
            },
            (error) => {
              console.log(error)
              alert("שגיאה בנתונים נסה שנית")
            }
          );
  
      }
      else {
        this.tryToSubmit = true
      }
    }
  }
  
  