import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSurfaceComponent } from './planet-surface.component';

describe('PlanetSurfaceComponent', () => {
  let component: PlanetSurfaceComponent;
  let fixture: ComponentFixture<PlanetSurfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetSurfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
