import { TestBed } from '@angular/core/testing';

import { MySharedComponentsService } from './my-shared-components.service';

describe('MySharedComponentsService', () => {
  let service: MySharedComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySharedComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
