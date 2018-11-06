import { TestBed } from '@angular/core/testing';

import { CreateRegisterService } from './create-register.service';

describe('CreateRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateRegisterService = TestBed.get(CreateRegisterService);
    expect(service).toBeTruthy();
  });
});
