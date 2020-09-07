import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SearcCloth} from '../model/cloth'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FindClothService {
  private url = environment.API_URL + '/FindClothApplication';

  constructor(private http: HttpClient) { }

  getAllTHeStoreThatHaveTheCloth(clothSearch:SearcCloth){//קבלת כל החנויות שיש להם את הבגד הרצוי
    return this.http.post(this.url+"/FindStores",clothSearch );
  }

}
