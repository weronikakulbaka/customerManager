import { TestBed } from '@angular/core/testing';

import { CustomerAddDeactiveteGuardService } from './customer-add-deactivete-guard.service';

describe('CustomerAddDeactiveteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerAddDeactiveteGuardService = TestBed.get(CustomerAddDeactiveteGuardService);
    expect(service).toBeTruthy();
  });
});
