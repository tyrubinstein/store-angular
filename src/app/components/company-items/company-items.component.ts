import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-items',
  templateUrl: './company-items.component.html',
  styleUrls: ['./company-items.component.scss']
})
export class CompanyItemsComponent implements OnInit {
  values = [
    { id: 1, name: "fall" },
    { id: 2, name: "winter" },
    { id: 3, name: "spring" },
    { id: 4, name: "summer" }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }
}
