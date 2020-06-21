import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-of',
  templateUrl: './list-of.component.html',
  styleUrls: ['./list-of.component.scss']
})
export class ListOfComponent implements OnInit {
  subjectList=[{name:"one"},{name:"two"},{name:"three"},{name:"יהודית"},{name:"יהודית"},{name:"יהודית"},{name:"יהודית"},{name:"יהודית"},{name:"יהודית"},{name:"יהודית"},{name:"יהודית"}]
  
  constructor() { }
  getsubjectlist(){
    return this.subjectList
  }
  ngOnInit(): void {
  }

}