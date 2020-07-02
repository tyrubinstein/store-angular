import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bill } from '../model/bill';
import { HttpClient ,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {  Observable,  } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FileService {
 private url = environment.API_URL + '/Bills';
 constructor(private http:HttpClient) { }

 uploadImage( image) {
   debugger
  const formData: FormData = new FormData();
  formData.append('Image', image);
  // formData.append('ComponentId', componentId);
  return this.http.post(this.url+"/Upload", formData);
}


 
 //כל החשבוניות של החנות
  getAllBills():Observable<Bill[]> {
    // return this.http.get<Bill>(this.url+"/getAllBills?storeId="+storeId);
    return this.http.get<Bill[]>(this.url+"/GetAll");
  }

 //מחיקת קובץ מהמלאי
 deleteFileFromInventory(fileName:string):Observable<any>{
   debugger
    return this.http.get(this.url+"/DeleteFile?path="+fileName)
  }
  searchByRange(d1,d2){
    debugger
    return this.http.get(this.url+"/Search?date1="+d1+"&date2="+d2);
  }
}
