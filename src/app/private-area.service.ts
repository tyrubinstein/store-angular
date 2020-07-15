import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from './model/store';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateAreaService {
  
  private url = environment.API_URL + '/PrivateArea';
  constructor(private http: HttpClient,private authservice:AuthService) { }

  getUser(id: number):Observable<Store> {

    return this.http.get<Store>(this.url + "/GetUserById" + "?id=" + id);
  }
  ChangeDetails(model: Store) {
    debugger
    return this.http.post<Store>(this.url + "/UpdateDetails" ,model);
  }
}
