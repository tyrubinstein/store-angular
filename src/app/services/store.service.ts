import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private url = environment.API_URL + '/Store';

  constructor(private http:HttpClient) { }
  GetStoreNameById(idofCurrentStore:number):Observable<string>{ 
    return this.http.get<string>(this.url+"/GetStoreNameById?ID="+idofCurrentStore);
 }
}
