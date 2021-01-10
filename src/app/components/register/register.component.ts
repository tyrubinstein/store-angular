import { Component, OnInit } from '@angular/core';
import { Store, Login } from '../../model/store'
import { RegisterService } from '../../services/Register-service'
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  stateOptions: any[];
  value1: string = "off";
  value2: number;
  value3: any;
  formSubmited = false//האם הפורם נשלח
  registermodel:Store=new Store;
  tryToSubmit = false
  constructor(private registerService: RegisterService, 
    private router: Router, private authService: AuthService) {
   
   }
  ngOnInit(): void {

  }
  gotoCompRegister(){
this.router.navigate(['comp-register']);

  }
  // addRegister(myname, mystoreName, myphone, storePhone, myaddres, myemail, mypassword, mycity) {
  // }
  submitForm(f: NgForm) {
    debugger
    if (f.valid) {
      this.registerService.addStore(this.registermodel)
        .subscribe(
          (response:string) => {
            this.formSubmited = true
            if(response!="0"){
                this.authService.LoginAuth(response,'no');
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

