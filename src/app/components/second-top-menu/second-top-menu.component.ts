import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-second-top-menu',
  templateUrl: './second-top-menu.component.html',
  styleUrls: ['./second-top-menu.component.scss']
})
export class SecondTopMenuComponent implements OnInit {
iscompany=this.authservice.iscomp();
isLogged=this.authservice.isAuth();
  constructor(private authservice:AuthService) { 
    this.authservice.getIsCompany.subscribe(
       (res)=>{if(res==false)
      this.iscompany = false;
    else
    this.iscompany = false;});    
      this.authservice.getLoggedInName.subscribe(name =>this.isLogged=true);

  }

  ngOnInit(): void {
  }

}
