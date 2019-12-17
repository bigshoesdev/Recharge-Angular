import { TestBed, inject } from '@angular/core/testing';

import { FixUiService } from './fix-ui.service';

describe('FixUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixUiService]
    });
  });

  it('should be created', inject([FixUiService], (service: FixUiService) => {
    expect(service).toBeTruthy();
  }));
});
