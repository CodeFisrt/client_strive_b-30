import { TestBed } from '@angular/core/testing';

import { Clinet } from './clinet';

describe('Clinet', () => {
  let service: Clinet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Clinet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
