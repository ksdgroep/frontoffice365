import { TestBed, inject } from '@angular/core/testing';

import { CourseTemplateService } from './coursetemplate.service';

describe('CoursetemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseTemplateService]
    });
  });

  it('should be created', inject([CourseTemplateService], (service: CourseTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
