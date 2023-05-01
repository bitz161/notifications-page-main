import { TestBed } from '@angular/core/testing';

import { NotifvaluesService } from './notifvalues.service';

describe('NotifvaluesService', () => {
  let service: NotifvaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifvaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
