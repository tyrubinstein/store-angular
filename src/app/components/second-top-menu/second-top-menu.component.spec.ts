import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTopMenuComponent } from './second-top-menu.component';

describe('SecondTopMenuComponent', () => {
  let component: SecondTopMenuComponent;
  let fixture: ComponentFixture<SecondTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
