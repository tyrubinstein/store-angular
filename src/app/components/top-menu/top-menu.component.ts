import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  isLogged=this.authservice.isAuth();
  iscompany=this.authservice.iscomp();

  // @Input() logged:boolean;
  constructor(private authservice:AuthService) { 
    this.authservice.getLoggedInName.subscribe(name =>this.isLogged=true);

  }

  ngOnInit(): void {
   
    
  }
  LogOut(){
    this.authservice.logout();
    this.isLogged=false;
    this.iscompany=false;
  }
}
