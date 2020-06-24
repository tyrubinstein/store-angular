import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  Observable,  } from 'rxjs'
import { Bill } from '../model/bill';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
 private url = environment.API_URL + '/Bills';
 constructor(private http:HttpClient) { }
   
 upload(fileToUpload: any) {
  let input = new FormData();
  input.append("file", fileToUpload);

  return this.http
      .post("/api/uploadFile", input);
}

 
 //כל החשבוניות של החנות
  getAllBills():Observable<Bill[]> {
    debugger
    // return this.http.get<Bill>(this.url+"/getAllBills?storeId="+storeId);
    return this.http.get<Bill[]>(this.url+"/GetAll");
  }

 //מחיקת קובץ מהמלאי
  deleteFileFromInventory(fileName:string){
    return this.http.delete(this.url+"/DeleteFile?FileName="+fileName);
  }
}
