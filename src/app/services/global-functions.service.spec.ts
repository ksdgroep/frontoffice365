import { TestBed, inject } from '@angular/core/testing';

import { GlobalFunctionsService } from './global-functions.service';

describe('GlobalFunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalFunctionsService]
    });
  });

  it('should be created', inject([GlobalFunctionsService], (service: GlobalFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
