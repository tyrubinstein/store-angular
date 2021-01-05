import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRegisterComponent } from './comp-register.component';

describe('CompRegisterComponent', () => {
  let component: CompRegisterComponent;
  let fixture: ComponentFixture<CompRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
