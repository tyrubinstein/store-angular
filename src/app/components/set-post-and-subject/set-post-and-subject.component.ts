import { Component, OnInit, Input, Output } from '@angular/core';
import { SubjectOfForum } from 'src/app/model/subjectOfForum';
import { PostService } from 'src/app/services/post.service';
import { SubjectOfForumService } from 'src/app/services/subjectOfForum.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-set-post-and-subject',
  templateUrl: './set-post-and-subject.component.html',
  styleUrls: ['./set-post-and-subject.component.scss']
})
export class SetPostAndSubjectComponent implements OnInit {
@Input() subjectOrPost:string;
titleSet:string;
buildSubject:SubjectOfForum=new SubjectOfForum;
buildPost:Post=new Post;
submitNavigate:string;
@Input() chooserId:number;
wanttoUpdate:string;
@Input() GetCurrentId: Function;
@Input() SetSetToClose: Function;

//לעשות ngmodel to open for cancel
constructor(private PostService:PostService,private SubjectService:SubjectOfForumService,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
if(this.subjectOrPost=='post')
{//לסדר את הוספת השם של הנענה למשתנה הזה
  this.titleSet="תגובה ל";
this.wanttoUpdate="?רוצה להתעדכן כשמשהו מצביע לך";
this.submitNavigate="Post"
}
else{ this.titleSet="הכנס את כותרת הנושא כאן...";
this.wanttoUpdate="?רוצה להתעדכן כשמשהו יענה לך";
this.submitNavigate="Subject"

}
  }
  cancel()
  {   
    this.SetSetToClose();
  }
  B()
  {   
  }
  I()
  {   
  }
  submitSubject(subjectName:string,ifWantUpdate:boolean,subjectContent:string)
  {  
   this.buildSubject.SubjectName= subjectName;
   this.buildSubject.IfWantUpdate= ifWantUpdate;
   this.buildSubject.StoreID= this.authService.getUserId();
   this.buildSubject.Content= subjectContent;
   this.SubjectService.addSubject(this.buildSubject) .subscribe(
    (response) =>
    {alert("adding post succeed");   
    this.SetSetToClose();
     },
    (error) => console.log(error)
  );
  }
  submitPost(SubjectOrPostName:string,ifWantUpdate:boolean,Content:string)
  {    
    this.buildPost.SubjectID=this.GetCurrentId(); 
    this.buildPost.StoreID=this.authService.getUserId();
    this.buildPost.ContentText=Content;
    this.buildPost.ifWantUpdate=ifWantUpdate;
    this.buildPost.Title=SubjectOrPostName;
    this.PostService.addPost(this.buildPost) .subscribe(
    (response) =>
    {
      alert("adding post succeed");   
    this.SetSetToClose();
     }
    ,
    (error) => console.log(error));
  }

}
