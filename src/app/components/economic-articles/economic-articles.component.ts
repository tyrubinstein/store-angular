import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic-articles',
  templateUrl: './economic-articles.component.html',
  styleUrls: ['./economic-articles.component.scss']
})
export class EconomicArticlesComponent implements OnInit {
head=true;
 nameOfController: string = '/Article';
  nameOfFunction: string = '/GetAll';
  chooserId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
