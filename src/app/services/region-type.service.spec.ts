import { TestBed, inject } from '@angular/core/testing';

import { RegionTypeService } from './region-type.service';

describe('RegionTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionTypeService]
    });
  });

  it('should be created', inject([RegionTypeService], (service: RegionTypeService) => {
    expect(service).toBeTruthy();
  }));
});
