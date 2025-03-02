import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetOverviewComponent } from './planet-overview.component';

describe('PlanetOverviewComponent', () => {
  let component: PlanetOverviewComponent;
  let fixture: ComponentFixture<PlanetOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
