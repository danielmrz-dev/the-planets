import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetOptionComponent } from './planet-option.component';

describe('PlanetOptionComponent', () => {
  let component: PlanetOptionComponent;
  let fixture: ComponentFixture<PlanetOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
