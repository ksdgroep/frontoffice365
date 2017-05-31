import { TestBed, inject } from '@angular/core/testing';

import { EnrolService } from './enrol.service';

describe('EnrolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnrolService]
    });
  });

  it('should be created', inject([EnrolService], (service: EnrolService) => {
    expect(service).toBeTruthy();
  }));
});
