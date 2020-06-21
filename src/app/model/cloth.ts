export class Cloth {
         ClothID :string
         ClothCompaniCod:string
         CompanyId :string
         YearOfProduction :Date
         Describe:string
         pictureURL:string
         Color :string
         Price:number
        constructor( ClothID :string,
            ClothCompaniCod:string,
            CompanyId :string,
            YearOfProduction :Date,
            Describe:string,
            pictureURL:string,
            Color :string,
            Price:number){
this.ClothCompaniCod=ClothCompaniCod;
this.ClothID=ClothID;
this.Color=Color;
this.CompanyId=CompanyId;
this.Describe=Describe;
this.Price=Price;
this.YearOfProduction=YearOfProduction;
this.pictureURL=pictureURL;
        }
}
