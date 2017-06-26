import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

import { CharactersListComponent } from './characters-list.component';
import * as testing from '../../../testing/index';
import { ConfigService } from 'app/core';
import { CharacterService } from 'app/characters/character.service';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [CharactersListComponent],
      providers: [
        CharacterService,
        ConfigService,
        { provide: CharacterService, useClass: testing.DataServiceStub }
      ],
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

    it('should have Characters h2', () => {
      debugElement = fixture.debugElement.query(By.css('h2'));
      htmlElement = debugElement.nativeElement;
      expect(htmlElement.textContent).toEqual('Characters');
    });

    it('should have populate chars[]', () => {
      expect(component.chars.length).toEqual(testing.characters.length);
    });

    it('should set selected character when clicked', () => {
      const testingCharacter = testing.characters[0];
      debugElement = fixture.debugElement.query(By.css('md-list-item'));
      htmlElement = debugElement.nativeElement;
      htmlElement.click();
      expect(component.selectedCharacter).toBe(testingCharacter);
    });

    it('should not set character when not clicked', () => {
      const testingCharacter = testing.characters[0];
      debugElement = fixture.debugElement.query(By.css('md-list-item'));
      htmlElement = debugElement.nativeElement;
      expect(component.selectedCharacter).not.toBe(testingCharacter);
    });
  });
});
