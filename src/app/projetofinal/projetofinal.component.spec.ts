import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetofinalComponent } from './projetofinal.component';

describe('ProjetofinalComponent', () => {
  let component: ProjetofinalComponent;
  let fixture: ComponentFixture<ProjetofinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetofinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetofinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
