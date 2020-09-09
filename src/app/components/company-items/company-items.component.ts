import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { SearcCloth, Cloth } from 'src/app/model/cloth';
import { error } from 'protractor';
import { ok } from 'assert';
import { Inventory } from 'src/app/model/inventory';
import { AuthService } from 'src/app/services/auth.service';
import { Season } from 'src/app/model/season';
@Component({
  selector: 'app-company-items',
  templateUrl: './company-items.component.html',
  styleUrls: ['./company-items.component.scss']
})
export class CompanyItemsComponent implements OnInit {

  seasonId:number = 5;
  @Input() SetSetToClose: Function;
  @Input() inventory: Inventory[];
  inventoryArr: Cloth[] = [];
  seasons:Season[] =[];
  Year:number ;
  clothesArr = [];
  inventorybyId: Inventory[] = [];
  retvalPlus:Inventory[]=[];
  retvalMinus:Inventory[]=[];
  companyId:number;
  constructor(private inventoryService: InventoryService, private authservice: AuthService) {
    this.Year = new Date().getFullYear();
    inventoryService.getSeasonsOptions().subscribe((data: Season[]) =>  this.seasons = data, (error) => console.error());
   }
  GetInventory(Year:number, seasonId:number): Promise<Cloth[]> {
    let promise = new Promise<Cloth[]>((resolve, reject) => {
      this.inventoryService.getInventoryOfClothByIdCompanyYearAndSeason(this.companyId, Year, seasonId)    
      .toPromise()
        .then(
          res => {
            // Success
            this.inventoryArr  = res;
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
  ngOnInit(): void {
    
    this.GetInventory(this.Year,this.seasonId).then(()=> this.inventoryArr.forEach(element => {
      if(this.inventory.find(i=>i.ClothID==element.ClothID)!=undefined){
          this.clothesArr.push(true);
        }
        else{
                  this.clothesArr.push(false)

        }
        
    }));
    
   
  
  
}
ButtonClick(){

}
  saveClothes() {
//הוספת בגד למלאי לחברה    
    }
  
  
  
  cancel() {
    this.SetSetToClose();
  }
 
}

