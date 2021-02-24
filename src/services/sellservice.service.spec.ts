import { TestBed } from '@angular/core/testing';

import { SellserviceService } from './sellservice.service';

describe('SellserviceService', () => {
  let service: SellserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
