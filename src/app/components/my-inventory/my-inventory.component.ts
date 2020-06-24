import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../services/file-service'
import { Bill } from 'src/app/model/bill';
@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss']
})
export class MyInventoryComponent implements OnInit {
  file: File
  allBills;
  constructor(private fileservice: FileService) { }

  ngOnInit(): void {
    this.fileservice.getAllBills().subscribe((data: Bill[]) => this.allBills = data, (error)=>console.error());
  console.log(this.allBills)
  }

  // private isUploadBtn: boolean = true;  

  getAllBills(){
    return this.allBills;
  }

  // delete() {//מחיקת קובץ
  //   return this.fileservice.deleteFileFromInventory("C:\תכנות\StoreProject\WebApplication1\WebApplication1\Files\032509317_DOCUMENT_1_59.pdf")

  // }


}

