import { Component, OnInit } from '@angular/core';
import { CfLists } from 'src/app/model/cf-lists';
import { ArticlesService } from 'src/app/services/articles.service';
import { error } from 'protractor';
import { Articles } from 'src/app/model/articles';

@Component({
  selector: 'app-economic-articles',
  templateUrl: './economic-articles.component.html',
  styleUrls: ['./economic-articles.component.scss']
})
export class EconomicArticlesComponent implements OnInit {
  head = true;
  nameOfController: string = '/Article';
  nameOfFunction: string = '/GetAll';
  chooserId: number;
  articlesArr: Articles[];
  opened = -1;
  constructor(private Articleservice: ArticlesService) { }

  ngOnInit(): void {
    this.Articleservice.getAllArticles().subscribe(
      (response: Articles[]) => {
        console.log(response)
        this.articlesArr = response;
      }, (error) => console.log(error))
  }
  getArticles() {
    return this.articlesArr;
  }
  read(index: number) {

    this.opened = index
  }
path(){

  let x= this.articlesArr[this.opened].ArticlesPath;
  // return x;
  return "C:\Users\מוזסון\Desktop\Angular\store-angular\src\assets\images\WIN_20200505_21_08_25_Pro.jpg"
}
}
