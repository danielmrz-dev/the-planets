import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { IPlanet } from '../../interfaces/planet.interface';
import { PlanetCircleColorPipe } from '../../pipes/planet-circle-color.pipe';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-planet-option',
  standalone: true,
  imports: [CommonModule, PlanetCircleColorPipe],
  templateUrl: './planet-option.component.html',
  styleUrl: './planet-option.component.scss',
})
export class PlanetOptionComponent {

  planets: IPlanet[] = [];
  constructor(
    private readonly _planetsService: PlanetsService,
    private readonly router: Router,
    private readonly drawer: MatDrawer
  ) {}

  ngOnInit(): void {
    this._planetsService.getPlanets().subscribe((planetsList) => {
      this.planets = planetsList;
    })
  }

  navigateToPlanet(planetName: string): void {
    this.router.navigate(['planets', planetName.toLowerCase()]);
    this.drawer.close();
  }

}
