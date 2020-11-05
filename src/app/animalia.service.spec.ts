import { TestBed } from '@angular/core/testing';

import { AnimaliaService } from './animalia.service';

describe('AnimaliaService', () => {
  let service: AnimaliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimaliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
