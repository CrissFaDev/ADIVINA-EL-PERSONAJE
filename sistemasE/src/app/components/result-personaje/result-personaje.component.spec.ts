import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPersonajeComponent } from './result-personaje.component';

describe('ResultPersonajeComponent', () => {
  let component: ResultPersonajeComponent;
  let fixture: ComponentFixture<ResultPersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultPersonajeComponent]
    });
    fixture = TestBed.createComponent(ResultPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
