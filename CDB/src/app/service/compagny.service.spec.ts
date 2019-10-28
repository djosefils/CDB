import { TestBed } from '@angular/core/testing';

import { CompagnyService } from './compagny.service';

describe('CompagnyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompagnyService = TestBed.get(CompagnyService);
    expect(service).toBeTruthy();
  });
});
