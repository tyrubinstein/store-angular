import { Component, OnInit, Output } from '@angular/core';
import { SubjectOfForumService } from 'src/app/services/subjectOfForum.service';
import { SubjectOfForum } from 'src/app/model/subjectOfForum';
import { PostService } from 'src/app/services/post.service';
import { EventEmitter } from '@angular/core';
import { CfLists } from 'src/app/model/cf-lists';


@Component({
  selector: 'app-list-of-subjects',
  templateUrl: './list-of-subjects.component.html',
  styleUrls: ['../list-of/list-of.component.scss','./list-of-subjects.component.scss']
})
export class ListOfSubjectsComponent implements OnInit {
  @Output() IdOfSubject:number;
 
  listOfSubject:CfLists[];
    constructor(private SubjectService:SubjectOfForumService,private PostService:PostService) {
      // this.PostService.getTheCodOfSubjectOftheLatestPost().subscribe((data: number) => this.IdOfSubject = data);
     }

    ngOnInit(): void {  
      // this.SubjectService.getListOfsubject().subscribe((data: CfLists[]) => this.listOfSubject = data);
    }

  getsubjectlist():CfLists[]{
     return this.listOfSubject;
  }
  
}
