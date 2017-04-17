import { TestBed, inject } from '@angular/core/testing';

import { DiffService } from './diff.service';

describe('DiffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiffService]
    });
  });

  it('should ...', inject([DiffService], (service: DiffService) => {
    expect(service).toBeTruthy();
  }));
});
