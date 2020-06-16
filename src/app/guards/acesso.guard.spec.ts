import { TestBed } from '@angular/core/testing';

import { AcessoGuardService } from './acesso-guard.service';

describe('AcessoGuardService', () => {
  let service: AcessoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcessoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
