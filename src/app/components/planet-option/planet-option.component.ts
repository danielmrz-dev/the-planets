import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { IPlanet } from '../../interfaces/planet.interface';
import { PlanetCircleColorPipe } from '../../pipes/planet-circle-color.pipe';
import { ActivatedRoute, Event, Router, RouterLinkActive } from '@angular/router';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { map } from 'rxjs';

@Component({
  selector: 'app-planet-option',
  standalone: true,
  imports: [CommonModule, PlanetCircleColorPipe, RouterLinkActive],
  templateUrl: './planet-option.component.html',
  styleUrl: './planet-option.component.scss',
})
export class PlanetOptionComponent {

  planets: IPlanet[] = [];
  currentPlanet: string = '';
  @ViewChild(MatDrawer) matDrawer!: MatDrawer;

  @Output() closeSideNav = new EventEmitter<void>();
  constructor(
    private readonly _planetsService: PlanetsService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this._planetsService.getPlanets().subscribe((planetsList) => {
      this.planets = planetsList;
    })
  }

  navigateToPlanet(planetName: string): void {
    this.router.navigate(['planets', planetName.toLowerCase()]);
    this.currentPlanet = planetName;
    this.closeSideNav.emit();
  }

}
