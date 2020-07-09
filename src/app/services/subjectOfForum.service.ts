import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { SubjectOfForum } from '../model/subjectOfForum';
import { environment } from 'src/environments/environment';
import { CfLists } from '../model/cf-lists';
import { ForlistService } from './forlist.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectOfForumService {
  private url = environment.API_URL + '/Subject';

 idofCurrentSubject:number;
  constructor( private http:HttpClient, private forlistService:ForlistService) { }

//מקבלת קוד מחזירה עצם נושא
getSubjectByID(idofCurrentSubject:number):Observable<SubjectOfForum>{ 
   return this.http.get<SubjectOfForum>(this.url+"/GetSubjectByID?ID="+idofCurrentSubject);
}
//מקבלת עצם מטיפוס סבג'קט ומווסיפה ל מסד נתונים
addSubject(s:SubjectOfForum)
{
  return this.http.post(this.url+"/AddSubject",s);
}
//מחדירה את ה קוד של הנושא החדש ביותר שהועלה
GetIDOfNewestSubject():Observable<number>{ 
  return this.http.get<number>(this.url+"/GetIDOfNewestSubject");
}
//מחזירה את התאריך של הפןסט האחרון שנכתב כתגובה לנושא זה
GetlatestDateOfPostBySubjectId(subjectId:number):Observable<Date>{
  return this.http.get<Date>(this.url+"/GetlatestDateOfPostBySubjectId?subjectId="+subjectId);
 }
}


