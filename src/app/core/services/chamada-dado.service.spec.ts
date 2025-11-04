import { TestBed } from '@angular/core/testing';

import { ChamadaDadoService } from './chamada-dado.service';

describe('ChamadaDadoService', () => {
  let service: ChamadaDadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamadaDadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
