import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
 //כל החשבוניות של החנות
  getAllBills(storeId: string) {
    return this.http.get(this.url+"/getAllBills?storeId="+storeId);
  }

  url='http://localhost:2542/Files';
  constructor(private http:HttpClient) { }
//מחיקת קובץ מהמלאי
  deleteFileFromInventory(fileName:string){
    return this.http.delete(this.url+"/DeleteFile?FileName="+fileName);
  }
}
