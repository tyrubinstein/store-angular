import { TestBed } from '@angular/core/testing';

import { SubjectOfForumService } from './subjectOfForum.service';

describe('SubjectOfForumService', () => {
  let service: SubjectOfForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectOfForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
