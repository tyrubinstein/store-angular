import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclothesComponent } from './addclothes.component';

describe('AddclothesComponent', () => {
  let component: AddclothesComponent;
  let fixture: ComponentFixture<AddclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
