import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cloth, Company } from '../model/cloth';
import { Observable } from 'rxjs';
import { Inventory } from '../model/inventory';
import { Season } from '../model/season';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 
  private url = environment.API_URL + '/Inventory';
  constructor(private http:HttpClient) { }
  getInventory():Observable<Cloth[]>{
    return this.http.get<Cloth[]>(this.url+"/GetInventory" );
  }
  GetListOfClothForCompany(CompanyId:number,year:number,seasonId:number):Observable<Cloth[]>{
    return this.http.get<Cloth[]>(this.url+"/GetInventoryForCompany/CompanyId"+CompanyId&&"year"+year&&"seasonId"+ seasonId );
  }
  
  saveClothes(data:any):Observable<any>{
  return this.http.post(this.url+"/SaveClothes",data);
  }
  getSeasonsOptions():Observable<Season[]>
  {
    return this.http.get<Season[]>(this.url+"/getSeasonsOptions");
  }
}
