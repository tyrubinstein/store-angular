import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPostAndSubjectComponent } from './set-post-and-subject.component';

describe('SetPostAndSubjectComponent', () => {
  let component: SetPostAndSubjectComponent;
  let fixture: ComponentFixture<SetPostAndSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPostAndSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPostAndSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
