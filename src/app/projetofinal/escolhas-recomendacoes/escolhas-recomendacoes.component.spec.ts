import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhasRecomendacoesComponent } from './escolhas-recomendacoes.component';

describe('EscolhasRecomendacoesComponent', () => {
  let component: EscolhasRecomendacoesComponent;
  let fixture: ComponentFixture<EscolhasRecomendacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhasRecomendacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhasRecomendacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
