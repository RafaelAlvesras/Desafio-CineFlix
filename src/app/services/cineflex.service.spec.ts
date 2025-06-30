import { TestBed } from '@angular/core/testing';

import { CineflexService } from './cineflex.service';

describe('CineflexService', () => {
  let service: CineflexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CineflexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
