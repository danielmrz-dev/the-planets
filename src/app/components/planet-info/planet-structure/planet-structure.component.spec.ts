import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetStructureComponent } from './planet-structure.component';

describe('PlanetStructureComponent', () => {
  let component: PlanetStructureComponent;
  let fixture: ComponentFixture<PlanetStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
