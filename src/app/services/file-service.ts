import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bill } from '../model/bill';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, } from 'rxjs'
import { Inventory } from '../model/inventory';



@Injectable({
  providedIn: 'root'
})
export class FileService {
  private url = environment.API_URL + '/Bills';
  constructor(private http: HttpClient) { }
  GetInventoryById(id: number): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.url+"/GetInventoryById?id="+id);
  }
  upload(files) {
    debugger
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': undefined,
        'Accept': 'application/json'
        //  parameters: parameters
      })

    };
    return this.http.post(this.url + '/Upload', files );
  }
  //כל החשבוניות של החנות
  getAllBills(id: number): Observable<Bill[]> {
    
    return this.http.get<Bill[]>(this.url + "/GetAll" + "?id=" + id);
  }
  //מחיקת קובץ מהמלאי
  deleteFileFromInventory(fileName: string): Observable<any> {
    debugger
    return this.http.get(this.url + "/DeleteFile?path=" + fileName)
  }
  searchByRange(d1, d2) {
    debugger
    return this.http.get(this.url + "/Search?date1=" + d1 + "&date2=" + d2);
  }
}
