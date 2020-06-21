import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClothApplicationComponent } from './find-cloth-application.component';

describe('FindClothApplicationComponent', () => {
  let component: FindClothApplicationComponent;
  let fixture: ComponentFixture<FindClothApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindClothApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClothApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
