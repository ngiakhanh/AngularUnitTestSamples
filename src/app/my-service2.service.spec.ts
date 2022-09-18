/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyService2 } from './my-service2.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: MyService2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MyService2]
    });
  });

  it('should ...', inject([MyService2], (service: MyService2) => {
    expect(service).toBeTruthy();
  }));
});
