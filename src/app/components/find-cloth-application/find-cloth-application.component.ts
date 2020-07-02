import { Component, OnInit } from '@angular/core';
import {StoresThatHaveTheCloth}from '../../model/store';
import {  SearcCloth} from "../../model/cloth";
import {FindClothService } from "../../services/find-cloth.service";
@Component({
  selector: 'app-find-cloth-application',
  templateUrl: './find-cloth-application.component.html',
  styleUrls: ['./find-cloth-application.component.scss']
})
export class FindClothApplicationComponent implements OnInit {
 
  foundStores;
  SearchClothModel:SearcCloth;
  constructor(private findclothservice:FindClothService) { }

  ngOnInit(): void {
  }
  SearchCloth(){
    this.findclothservice.getAllTHeStoreThatHaveTheCloth(this.SearchClothModel).subscribe(
      (response:StoresThatHaveTheCloth)=>{
        if (response[0]){
         this.foundStores=response;

        }
        else{
          alert("אין לשום חנות את הבגד");
        }
      },
      (error)=>{console.log(error)})
  }
  getStoresThtHaveTheCloth(){
    return this.foundStores
  }

}
