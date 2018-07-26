import { TestBed, inject } from '@angular/core/testing';

import { AppPermissionsService } from './app-permissions.service';

describe('AppPermissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppPermissionsService]
    });
  });

  it('should be created', inject([AppPermissionsService], (service: AppPermissionsService) => {
    expect(service).toBeTruthy();
  }));
});
