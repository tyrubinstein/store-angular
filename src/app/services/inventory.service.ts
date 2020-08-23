import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cloth } from '../model/cloth';
import { Observable } from 'rxjs';
import { Inventory } from '../model/inventory';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 
  private url = environment.API_URL + '/Inventory';
  constructor(private http:HttpClient) { }
  getInventory():Observable<Cloth[]>{
    return this.http.get<Cloth[]>(this.url+"/GetInventory" );
  }
  saveClothes(data:any):Observable<any>{
  return this.http.post(this.url+"/SaveClothes",data);
  }
}
