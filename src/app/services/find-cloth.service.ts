import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cloth} from '../model/cloth'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FindClothService {
  private url = environment.API_URL + '/FindCloth';

  constructor(private http: HttpClient) { }

  getAllTHeStoreThatHaveTheCloth(cloth:Cloth){//קבלת כל החנויות שיש להם את הבגד הרצוי
    return this.http.post(this.url+"/Find",cloth );
  }

}
