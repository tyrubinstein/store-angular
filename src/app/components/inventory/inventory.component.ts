import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { SearcCloth, Cloth } from 'src/app/model/cloth';
import { error } from 'protractor';
import { ok } from 'assert';
import { Inventory } from 'src/app/model/inventory';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() SetSetToClose: Function;
  @Input() inventory: Inventory[];
  inventoryArr: Cloth[] = [];
  clothesArr = [];
  inventorybyId: Inventory[] = [];
  retvalPlus:Inventory[]=[];
  retvalMinus:Inventory[]=[];
  constructor(private inventoryService: InventoryService, private authservice: AuthService) { }
  GetInventory(): Promise<Cloth[]> {
    let promise = new Promise<Cloth[]>((resolve, reject) => {
      this.inventoryService.getInventory()    
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
    
    this.GetInventory().then(()=> this.inventoryArr.forEach(element => {
      if(this.inventory.find(i=>i.ClothID==element.ClothID)!=undefined){
          this.clothesArr.push(true);
        }
        else{
                  this.clothesArr.push(false)

        }
        
    }));
    //fil the array for checked
   
  }
  saveClothes() {
    for (let index = 0; index <this.clothesArr.length; index++) {
      //אם מסומן ועדיין לא במלאי
       if(this.clothesArr[index]==true&&this.inventory.find(inv=>inv.ClothID==this.inventoryArr[index].ClothID)==undefined){
         let inventoryobg=new Inventory();
         inventoryobg.ClothID=this.inventoryArr[index].ClothID;
         inventoryobg.StoreId=this.authservice.getUserId();
         inventoryobg.YearOfProduction=this.inventoryArr[index].YearOfProduction;
        this.retvalPlus.push(inventoryobg);
        continue;
      }
      if(this.clothesArr[index]==false&&this.inventory.find(inv=>inv.ClothID==this.inventoryArr[index].ClothID)!=undefined){
        let inventoryobg=new Inventory();
         inventoryobg.ClothID=this.inventoryArr[index].ClothID;
         inventoryobg.StoreId=this.authservice.getUserId();
         inventoryobg.YearOfProduction=this.inventoryArr[index].YearOfProduction;
        this.retvalMinus.push(inventoryobg);
        continue;
      }
    }
    if(this.retvalMinus.length==0&&this.retvalPlus.length==0){
      alert("אין מה לשמור")
      return;
    }
    let ob =[[],[]];
ob[0] = this.retvalMinus; 
ob[1] =this.retvalPlus; 
let data = ob; // Object with arrays
    this.inventoryService.saveClothes(data).subscribe((response) => {
      this.cancel()
      alert("הנתונים נשמרו בהצלחה")

    }, (error) => {
      console.log(error)
      alert("שגיאה בשמירת הנתונים נסה שנית")
     
    }
    )
  }
  check(item: Cloth): boolean {
    if (this.inventory.find(i => i.ClothID == item.ClothID)) {
      return true;
    }
    return false;
  }
  handleChange(i: number) {
    this.clothesArr[i] = !this.clothesArr[i]
  }
  cancel() {
    this.SetSetToClose();
  }
 
}
