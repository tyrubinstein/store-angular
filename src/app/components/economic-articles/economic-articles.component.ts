import { Component, OnInit } from '@angular/core';
import { CfLists } from 'src/app/model/cf-lists';
import { ArticlesService } from 'src/app/services/articles.service';
import { error } from 'protractor';
import { Articles } from 'src/app/model/articles';
import {DomSanitizer} from '@angular/platform-browser';


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
  constructor(private sanitizer:DomSanitizer,private Articleservice: ArticlesService) { }

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
  let url= this.sanitizer.bypassSecurityTrustUrl(x); 
  return url;
}
}
