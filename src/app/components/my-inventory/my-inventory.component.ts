import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../services/file-service'
import { Bill } from 'src/app/model/bill';
import { AuthService } from "../../services/auth.service";
import { error } from 'protractor';
import { Inventory } from 'src/app/model/inventory';
import { InventoryComponent } from '../inventory/inventory.component';
@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss']
})
export class MyInventoryComponent implements OnInit {
 
  file: File
  addClothesOpen = false;
  allBills = [];
  allSearchBills = []
  RangeForSearchDate1: Date = null;
  RangeForSearchDate2: Date = null;
  textForButton = "חפש חשבוניות"
  myinventory:Inventory[]=[];
  constructor(private fileservice: FileService, private authservice: AuthService) { }


  ngOnInit(): void {
    this.fileservice.getAllBills(this.authservice.getUserId()).subscribe((data: Bill[]) => this.allBills = data, (error) => console.error());
    console.log(this.allBills)
    //get inventoryth
    
    this.fileservice.GetInventoryById(this.authservice.getUserId()).subscribe(
      (response:any)=>{this.myinventory=response},
      (error)=>{; console.log(error)})
  }


  GetallBills() {
    if (this.textForButton == "הצג את הכל")
      return this.allSearchBills;
    else
      return this.allBills;

  }
  ButtonClick() {

    if (this.RangeForSearchDate1 != null && this.RangeForSearchDate2 != null && this.textForButton == "חפש חשבוניות") {
      this.searchBillsInRange();
      this.textForButton = "הצג את הכל"
    }
    else {
      this.textForButton = "חפש חשבוניות";
      this.GetallBills();
      this.RangeForSearchDate2 = null;
      this.RangeForSearchDate1 = null;
    }
  }


  searchBillsInRange() {

    this.fileservice.searchByRange(this.RangeForSearchDate1, this.RangeForSearchDate2).subscribe((data: Bill[]) => this.allSearchBills = data, (error) => console.log(error));
  }
  deleteFromArr(path) {//מחיקה מהמערך באנגולר
    var index;
    for (var i = 0; i < this.allBills.length; i++) {
      if (this.allBills[i].BillPath == path) {
        index = i;
        break;
      }
    }
    if (index) {
      this.allBills.splice(index, 1);
    }
  }
  delete(Deleted: string) {//מחיקת קובץ
    return this.fileservice.deleteFileFromInventory(Deleted).subscribe(
      (response: boolean) => {
        if (response == true) {
          this.deleteFromArr(Deleted)
          alert("החשבונית נמחקה בהצלחה")
        }
        else {
          alert("fail")
        }
      })

  }

  onFileChange(event) {

    let files = event.target.files;
    if (files.length > 0) {
      this.saveFiles(files)
    }

  }
  saveFiles(files) {
    let formData: FormData = new FormData();
    formData.append("file[]", files[0], this.authservice.getUserId().toString());
    var parameters = {
      storeId: this.authservice.getUserId()
    }
    this.fileservice.upload(formData).subscribe(
      (data: Bill[]) => {
        this.allBills = data;
        this.GetallBills();
        alert("הקובץ הועלה בהצלחה")
        console.log("success")

      },
      error => {

        console.log(error)
      })

  }
  AddClothes() {
    this.addClothesOpen = true;
  }

  get enableCloseAddCloth() {
    return this.CloseAddClothes.bind(this);
  }

  CloseAddClothes() {
 
    this.addClothesOpen = false;
  
  }
}

