import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';
import { ForlistService } from 'src/app/services/forlist.service';
import { CfLists } from 'src/app/model/cf-lists';
@Component({
  selector: 'app-list-of',
  templateUrl: './list-of.component.html',
  styleUrls: ['./list-of.component.scss']
})

export class ListOfComponent implements OnInit {

  @Input() nameOfFunction:string;
  @Input() nameOfController:string;
  @Input() changeCurrentIdFromChild: Function;

  listOf: CfLists[];
  constructor(private forListService:ForlistService) { }


text:string[];
  ngOnInit(): void {
    this.forListService.getListFromController(this.nameOfController,this.nameOfFunction).subscribe((data: CfLists[]) => this.listOf = data);
  }
  getsubjectlist() {
      return this.listOf;
  }
 
  pressOnRecord(Idoful:number) {
    
    this.changeCurrentIdFromChild(Idoful);
  }

  
}