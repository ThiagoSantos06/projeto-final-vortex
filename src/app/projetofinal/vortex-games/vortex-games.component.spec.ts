import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortexGamesComponent } from './vortex-games.component';

describe('VortexGamesComponent', () => {
  let component: VortexGamesComponent;
  let fixture: ComponentFixture<VortexGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VortexGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortexGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
