import { TestBed } from '@angular/core/testing';

import { PreguntaxpersonajeService } from './preguntaxpersonaje.service';

describe('PreguntaxpersonajeService', () => {
  let service: PreguntaxpersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntaxpersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
