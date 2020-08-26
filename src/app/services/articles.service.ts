import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from '../model/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url = environment.API_URL + '/Articles';

  constructor(private http:HttpClient) { }
  getAllArticles():Observable<Articles[]>{
    return this.http.get<Articles[]>(this.url+"/GetArticles");
  }
}
