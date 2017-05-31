import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilmsListComponent } from './films-list.component';

describe('FilmsListComponent', () => {
  let component: FilmsListComponent;
  let fixture: ComponentFixture<FilmsListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Before detectChanges', () => {
    it('should have empty films array', () => {
      expect(component.films).toBeUndefined();
    });
  });

  describe('After detectChanges', () => {

    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have Films title', () => {
      de = k.debugElement.query(By.css('h2'));
      // el = de.nativeElement;
      expect(component.title).toContain('Films');
      expect(de.)
    });

    // it('should have empty films array', () => {
    //   expect(component.films).toBeUndefined();
    // });
  });
});


//  it(`should have as title 'app works!'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app works!');
//   }));