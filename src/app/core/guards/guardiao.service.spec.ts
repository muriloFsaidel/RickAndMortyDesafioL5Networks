import { TestBed } from '@angular/core/testing';

import { GuardiaoService } from './guardiao.service';

describe('GuardiaoService', () => {
  let service: GuardiaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardiaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
