import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { IPlanet } from '../../interfaces/planet.interface';
import { PlanetCircleColorPipe } from '../../pipes/planet-circle-color.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planet-option',
  standalone: true,
  imports: [CommonModule, PlanetCircleColorPipe, RouterLink],
  templateUrl: './planet-option.component.html',
  styleUrl: './planet-option.component.scss',
})
export class PlanetOptionComponent {

  planets: IPlanet[] = [];
  constructor(private readonly _planetsService: PlanetsService) {}

  ngOnInit(): void {
    this._planetsService.getPlanets().subscribe((planetsList) => {
      this.planets = planetsList;
    })
  }


}
