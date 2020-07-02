import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { Subject,Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = environment.API_URL+"/Post";
  constructor(private http: HttpClient) { }
  
  //תלך לפןנקציה שמחזירה רשימת פוסטים לפי הקוד של הנושא שתקבל 
  public GetListOfPostByIdSubject(idOfSubject: number): Observable<Post[]> 
  {
    return this.http.get<Post[]>(this.url + "/GetListOfPostByIdSubject?idOfSubject="+idOfSubject);
  };
   //מקבלת עצם מטיפוס פוסט ומווסיפה ל מסד נתונים
   addPost(p: Post) {
    return this.http.post(this.url + "/AddPost", p)
  }
 
  // public getTheCodOfSubjectOftheLatestPost(): Observable<number> 
  // { 
  // //תחזיר את הקוד של הנושא של הפוסט הכי אחרון שנכתב 
  // return this.http.get(this.url+"/GetTheCodOfSubjectOftheLatestPost");
  // };

 


}
