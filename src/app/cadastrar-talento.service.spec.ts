import { TestBed } from '@angular/core/testing';

import { CadastrarTalentoService } from './cadastrar-talento.service';

describe('CadastrarTalentoService', () => {
  let service: CadastrarTalentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarTalentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
