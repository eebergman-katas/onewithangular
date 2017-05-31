import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';

fdescribe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have array of LabelLinks', () => {
    expect(component.charLinks).toBeDefined();
    expect(component.charLinks.length).toEqual(2);
  });

  it('should have characters entry in charLinks', () => {
    expect(component.charLinks[0].label).toEqual('Characters');
    expect(component.charLinks[0].link).toEqual('/characters');
  });

  it('should have species entry in charLinks', () => {
    expect(component.charLinks[1].label).toEqual('Species');
    expect(component.charLinks[1].link).toEqual('/characters/species');
  });
});
