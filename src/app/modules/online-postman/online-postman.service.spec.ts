import { TestBed } from '@angular/core/testing';

import { OnlinePostmanService } from './online-postman.service';

describe('OnlinePostmanService', () => {
  let service: OnlinePostmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlinePostmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
