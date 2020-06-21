import { Component, OnInit } from '@angular/core';
import {FoundStores}from '../../model/store'
@Component({
  selector: 'app-find-cloth-application',
  templateUrl: './find-cloth-application.component.html',
  styleUrls: ['./find-cloth-application.component.scss']
})
export class FindClothApplicationComponent implements OnInit {
 
  foundStores:FoundStores;
  
  constructor() { }

  ngOnInit(): void {
  }

  getStoresThtHaveTheCloth(){
    this.foundStores=new FoundStores("פמילילנד","מנחם בגין","פתח תקוה","רחל רובינשטיין","055555");
    return [this.foundStores]
  }

}
