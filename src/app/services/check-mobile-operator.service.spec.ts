import { TestBed, inject } from '@angular/core/testing';

import { CheckMobileOperatorService } from './check-mobile-operator.service';

describe('CheckMobileOperatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckMobileOperatorService]
    });
  });

  it('should be created', inject([CheckMobileOperatorService], (service: CheckMobileOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
