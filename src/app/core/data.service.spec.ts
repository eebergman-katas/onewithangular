import { TestBed, inject } from '@angular/core/testing';
import { XHRBackend, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DataService } from './data.service';
import { ConfigService } from 'app/core';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ConfigService,
        DataService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<string[]>',
    inject([DataService, XHRBackend], (dataService, mockBackend) => {
      const mockResponse = {
        results: [
        ]
      };
    }));
});
