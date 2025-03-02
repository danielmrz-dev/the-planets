import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetOverviewCardComponent } from './planet-overview-card.component';

describe('PlanetOverviewCardComponent', () => {
  let component: PlanetOverviewCardComponent;
  let fixture: ComponentFixture<PlanetOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetOverviewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
