import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyItemsComponent } from './company-items.component';

describe('CompanyItemsComponent', () => {
  let component: CompanyItemsComponent;
  let fixture: ComponentFixture<CompanyItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
