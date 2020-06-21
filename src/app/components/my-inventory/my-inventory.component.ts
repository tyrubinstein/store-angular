import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file-service'
@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss']
})
export class MyInventoryComponent implements OnInit {
  file: File
  fileservice: FileService
  ngOnInit(): void {
  }
  // private isUploadBtn: boolean = true;  
  constructor(fileservice: FileService) { }

  getAllBills(){
    return this.fileservice.getAllBills("מספר מזהה של מי שרשום עכשיו")
  }

  delete() {//מחיקת קובץ
    return this.fileservice.deleteFileFromInventory("C:\תכנות\StoreProject\WebApplication1\WebApplication1\Files\032509317_DOCUMENT_1_59.pdf")

  }
  //   downloadfile(type:string){
  //     var reader = new FileReader();
  //     this.fileservice.downloadfile(this.rundata.name, type)
  //         .subscribe(res => reader.readAsDataURL(res), 
  //                     error => console.log("Error downloading the file."),
  //                     () => console.log('Completed file download.'));

  //     reader.onloadend = function (e) {
  //         window.open(reader.result.toString(), 'Pdf', 'width=20,height=10,toolbar=0,menubar=0,scrollbars=no');
  //   }
  // }
}

