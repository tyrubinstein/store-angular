import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cloth} from '../model/cloth'
@Injectable({
  providedIn: 'root'
})
export class FindClothService {
  url = 'http://localhost:2542/FindCloth';

  constructor(private http: HttpClient) { }

  getAllTHeStoreThatHaveTheCloth(cloth:Cloth){//קבלת כל החנויות שיש להם את הבגד הרצוי
    return this.http.post(this.url+"/Find",cloth );
  }

}
