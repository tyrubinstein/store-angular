import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconomicArticlesComponent } from './components/economic-articles/economic-articles.component';
import { FindClothApplicationComponent } from './components/find-cloth-application/find-cloth-application.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForumComponent } from './components/forum/forum.component';
import { MyInventoryComponent } from './components/my-inventory/my-inventory.component';
import { AuthGuard } from './guard/auth.guard';
import { PrivateAreaComponent } from './components/private-area/private-area.component';
import { CompanyItemsComponent } from './components/company-items/company-items.component';
import { CompRegisterComponent } from './components/comp-register/comp-register.component';
import { SecondTopMenuComponent } from './components/second-top-menu/second-top-menu.component';


const routes: Routes = 
[
  { path: 'economic-articles-component', component: EconomicArticlesComponent ,canActivate: [AuthGuard]  },
  { path: 'my-inventory', component: MyInventoryComponent ,canActivate: [AuthGuard]},
  { path: 'find-cloth-application-component', component: FindClothApplicationComponent ,canActivate: [AuthGuard] },
  { path: 'home-page-component', component: HomePageComponent ,canActivate: [AuthGuard] },
  { path: 'login-component', component: LoginComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'forum-component', component: ForumComponent  ,canActivate: [AuthGuard]},
  { path: 'private-area-component', component: PrivateAreaComponent ,canActivate: [AuthGuard] },
  { path: 'company-items-component', component: CompanyItemsComponent ,canActivate: [AuthGuard] },
  { path:'comp-register',  component: CompRegisterComponent },
  { path:'second-top-menu',  component: SecondTopMenuComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
