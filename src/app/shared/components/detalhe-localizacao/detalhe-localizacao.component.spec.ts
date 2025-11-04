import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheLocalizacaoComponent } from './detalhe-localizacao.component';

describe('DetalheLocalizacaoComponent', () => {
  let component: DetalheLocalizacaoComponent;
  let fixture: ComponentFixture<DetalheLocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheLocalizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
