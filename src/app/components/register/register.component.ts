import { Component, OnInit } from '@angular/core';
import { Store } from '../../model/store'
import { RegisterService } from '../../services/Register-service'
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formSubmited = false//האם הפורם נשלח
  registermodel = new Store("", "", "", "", "", "", "", "");
  tryToSubmit = false
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    
  }

  addRegister(myname, mystoreName, myphone, storePhone, myaddres, myemail, mypassword, mycity) {
  }
  submitForm(f: NgForm) {
    if (f.valid) {
      this.registerService.addStore(new Store(this.registermodel.ManagerName, this.registermodel.StoreName, this.registermodel.City, this.registermodel.cellOftheStore, this.registermodel.Cell, this.registermodel.Address, this.registermodel.Email, this.registermodel.PasswordUser))
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
      this.formSubmited = true
    }
    else {
        this.tryToSubmit = true
    }
  }
}

