import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicArticlesComponent } from './economic-articles.component';

describe('EconomicArticlesComponent', () => {
  let component: EconomicArticlesComponent;
  let fixture: ComponentFixture<EconomicArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
