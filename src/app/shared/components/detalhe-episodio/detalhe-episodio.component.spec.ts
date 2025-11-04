import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEpisodioComponent } from './detalhe-episodio.component';

describe('DetalheEpisodioComponent', () => {
  let component: DetalheEpisodioComponent;
  let fixture: ComponentFixture<DetalheEpisodioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheEpisodioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheEpisodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
