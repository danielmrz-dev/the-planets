import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetInfoNavbarComponent } from './planet-info-navbar.component';

describe('PlanetInfoNavbarComponent', () => {
  let component: PlanetInfoNavbarComponent;
  let fixture: ComponentFixture<PlanetInfoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetInfoNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetInfoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
