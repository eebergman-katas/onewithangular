import { TestBed, inject } from '@angular/core/testing';
import { XHRBackend, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ConfigService, CharacterService } from 'app/core';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ConfigService,
        CharacterService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([CharacterService], (service: CharacterService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<string[]>',
    inject([CharacterService, XHRBackend], (dataService, mockBackend) => {
      const mockResponse = {
        results: [
        ]
      };
    }));
});
