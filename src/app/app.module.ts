import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EconomicArticlesComponent } from './components/economic-articles/economic-articles.component';
import { MyInventoryComponent } from './components/my-inventory/my-inventory.component';
import { FindClothApplicationComponent } from './components/find-cloth-application/find-cloth-application.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForumComponent } from './components/forum/forum.component';
import { ListOfComponent } from './components/list-of/list-of.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HttpClientModule } from '@angular/common/http';
import {RegisterService} from './services/Register-service'
import {AuthGuard} from './guard/auth.guard';
import{ AuthService}from'./services/auth.service';
import { PostService } from './services/post.service';
import { SubjectOfForumService } from './services/subjectOfForum.service';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { SetPostAndSubjectComponent } from './components/set-post-and-subject/set-post-and-subject.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { PrivateAreaComponent } from './components/private-area/private-area.component';
import { InventoryComponent } from './components/inventory/inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    EconomicArticlesComponent,
    MyInventoryComponent,
    FindClothApplicationComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    ForumComponent,
    ListOfComponent,
    SearchBoxComponent,
    TopMenuComponent,
    SubjectDetailsComponent,
    SetPostAndSubjectComponent,
    TimeAgoPipe,
    

    PrivateAreaComponent,
    

    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [RegisterService,AuthGuard,AuthService,PostService,SubjectOfForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
