import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { EventEmitter } from '@angular/core';
import { SubjectOfForumService } from 'src/app/services/subjectOfForum.service';
import { Subject } from 'rxjs';
import { SubjectDetailsComponent } from '../subject-details/subject-details.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],

})
export class ForumComponent implements OnInit {
  @ViewChild(SubjectDetailsComponent) child: SubjectDetailsComponent;


  nameOfController: string = '/Subject';
  nameOfFunction: string = '/GetListOfAllSubject';
  chooserId: number;
  openWritePost: boolean = false;
  subjectOrPost: string = "subject";
  
  constructor(private PostService: PostService, private SubjectService: SubjectOfForumService) { }
  ngOnInit() {
  }
  get enableChangeId() {
    return this.changeCurrentIdFromChild.bind(this);
  }
  changeCurrentIdFromChild(Id: number) {
    this.child.changeCurrentSubject(Id);
  }
  
  get enableOpenPost() {
    return this.newSubjectOrPost.bind(this);
  }
  newSubjectOrPost(subjectOrPost:string) {
 
    this.openWritePost = true;
   this.subjectOrPost=subjectOrPost;
  
  }
  get enableClosePost() {
    return this.CloseSubjectOrPost.bind(this);
  }
  CloseSubjectOrPost() {
 
    this.openWritePost = false;
  
  }
  get enableGetCurrentId() {
    return this.GetCurrentId.bind(this);
  }
  GetCurrentId():number {
    return this.child.currentSubjectID
  }


}

