import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // constructor(private router: Router) { }

  //   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //       if (localStorage.getItem('currentUser')) {
  //           // logged in so return true
  //           this.router.navigate(['home-page-component'])
  //           return true;
  //       }

  //       // not logged in so redirect to login page
  //       this.router.navigate(['/register-component'], { queryParams: { returnUrl: state.url }});
  //       return false;
  //   }


  constructor(private authservice:AuthService, private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.isAuth()) {
        return true;
     } else {
        this.router.navigate(["/login-component"]);
        return false;
     }
  }
  
}
