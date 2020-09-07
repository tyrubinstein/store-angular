import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/model/store';
import { PrivateAreaService } from 'src/app/services/private-area.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.scss']
})
export class PrivateAreaComponent implements OnInit {
  model: Store = new Store();
  constructor(private areaservice: PrivateAreaService, private auth: AuthService) {
   }

  ngOnInit(): void {
      this.getUser();
  }
  getUser(){
    this.areaservice.getUser(this.auth.getUserId()).subscribe((data:Store) => this.model = data, (error) => console.error());
   
  }
 changeDetails(){
  this.model.StoreID=this.auth.getUserId();
   debugger
   this.areaservice.ChangeDetails(this.model).subscribe((data) =>this.getUser() , (error) => console.error());
 
 }

}
