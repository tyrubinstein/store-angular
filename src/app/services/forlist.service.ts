import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CfLists } from '../model/cf-lists';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForlistService {
  private url = environment.API_URL;

  constructor( private http:HttpClient) { }
  public  getListFromController(nameOfController:string,nameOfFunction:string): Observable<CfLists[]> 
  {
//תלך לפןנקציה שמחזירה רשימה בהתאם לנתונים שקבלה 
  return this.http.get<CfLists[]>(this.url+nameOfController+nameOfFunction);
};
}
