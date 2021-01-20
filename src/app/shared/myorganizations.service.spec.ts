import { TestBed } from '@angular/core/testing';

import { MyorganizationsService } from './myorganizations.service';

describe('MyorganizationsService', () => {
  let service: MyorganizationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyorganizationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
