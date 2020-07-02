import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from 'src/app/model/post';
import { SubjectOfForumService } from 'src/app/services/subjectOfForum.service';
import { PostService } from 'src/app/services/post.service';
import { SubjectOfForum } from 'src/app/model/subjectOfForum';
import { StoreService } from 'src/app/services/store.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {
  currentSubject: SubjectOfForum;//הנושא הנוכחי
  listOfPost: Post[] ; //רשימת הפוסטים לנושא
  qtyOfAnswers: number;//כמות הפוסטים לנושא הנוכחי
  @Input() chooserId: number;
  @Input() newSubjectOrPost: Function;
@Output()
  currentSubjectID: number;
  openWritePost: boolean;
  SubjectID: number;
  ContentText: string;
  nameOfStore: string;
  chooserIdBegin: number;
temp:string
  constructor(private PostService: PostService, private SubjectService: SubjectOfForumService,private StoreService: StoreService) {
  }
  ngOnInit() {
    
    this.firstIdOfSubject()
      .then(() => this.currentSubjectID = this.chooserIdBegin)
      .then(() => this.getSubjectByID(this.currentSubjectID))
      .then(() =>  this.getNameStoreById(this.currentSubject.StoreID))
      .then(() => this.currentSubject.StoreName=this.nameOfStore)
      .then(() => this.getListOfPostById(this.chooserIdBegin))
  }
  firstIdOfSubject(): Promise<number> {
    
    let promise = new Promise<number>((resolve, reject) => {

      this.SubjectService.GetIDOfNewestSubject()
        .toPromise()
        .then(
          res => {
            // Success
            this.chooserIdBegin = res;
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  getlistofpostpromise(idsubject): Promise<Post[]> {
    let promise = new Promise<Post[]>((resolve, reject) => {
      this.PostService.GetListOfPostByIdSubject(idsubject)
        .toPromise()
        .then(
          res => {
            // Success
            this.listOfPost = res;
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
 
  getNameStoreById(id:number): Promise<string> {

    let promise = new Promise<string>((resolve, reject) => {
      this.StoreService.GetStoreNameById(id) 
         
      .toPromise()
        .then(
          res => {
            // Success
            this.nameOfStore = res;
            
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
    getSubjectByID(SubjectID: number): Promise<SubjectOfForum> {
      
    let promise = new Promise<SubjectOfForum>((resolve, reject) => {
      this.SubjectService.getSubjectByID(SubjectID)    
      .toPromise()
        .then(
          res => {
            // Success
            this.currentSubject  = res;

            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
  getListOfPostById(idsubject): Post[] {
    
    this.getlistofpostpromise(idsubject)
      .then(
        () => this.qtyOfAnswers = this.listOfPost.length)
        .then(
         () =>   () => this.listOfPost.forEach(element => {
           this.getNameStoreById(element.StoreID).then(()=>element.StoreName=this.nameOfStore)     
  }));
   return this.listOfPost;
  }
  changeCurrentSubject(idsubject: number) {
    this.getSubjectByID(idsubject);
    this.getListOfPostById(idsubject);
  }
  SometimeAgo(dateTime:Date):string{
    var differenceyear = new Date().getFullYear() - new Date(dateTime).getFullYear();
    var differencemonth = new Date().getFullYear() - new Date(dateTime).getFullYear();
  var differencedays = new Date().getFullYear() - new Date(dateTime).getFullYear();
  var differencehours = new Date().getFullYear() - new Date(dateTime).getFullYear();
var describeTime="";
  if(differenceyear>1)
  describeTime=""
    // this.temp=Date.now()-dateTime.get();
return "";


  }

  GetlistOfPost() { return this.listOfPost; }
 
   PostToAnswerSubject(PostOrsubject: string) {
    this.newSubjectOrPost(PostOrsubject);
   }

  //   this.openWritePost = true;
  // }
  
  send() {
    alert("hello");
    // this.p=SubjectID,AnswerTo

  }
  B() { }
  I() { }
  cancel() { }

}
 // getNameStoreById(id:number):string
  // {   this.StoreService.GetStoreNameById(id).subscribe((data: string) => this.nameOfStore = data);
  // return this.nameOfStore}