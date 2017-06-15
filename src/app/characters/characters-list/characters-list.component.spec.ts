import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CharactersListComponent } from './characters-list.component';
import { DataService, ConfigService } from 'app/core';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [CharactersListComponent],
      providers: [DataService, ConfigService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Before detectChanges', () => {
    it('should not have characters', () => {
      expect(component.chars.length).toEqual(0);
    });
  });

  describe('After detectChanges', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
  });
});
