import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPlanet } from '../../../interfaces/planet.interface';
import { PlanetsService } from '../../../services/planets.service';
import { PlanetOverviewCardComponent } from "./planet-overview-card/planet-overview-card.component";
import { PlanetInfoNavbarComponent } from "../planet-info-navbar/planet-info-navbar.component";

@Component({
  selector: 'app-planet-overview',
  standalone: true,
  imports: [CommonModule, PlanetOverviewCardComponent, PlanetInfoNavbarComponent],
  templateUrl: './planet-overview.component.html',
  styleUrl: './planet-overview.component.scss'
})
export class PlanetOverviewComponent {
  
  currentPlanetName: string = '';
  currentPlanet$: Observable<IPlanet | undefined> = of();
  currentRoute: string | undefined = '';
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly planetsService = inject(PlanetsService);

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe((value) => {
      this.currentPlanetName = value['planet'];
      this.currentPlanet$ = this.planetsService.getPlanet(this.currentPlanetName);
      this.currentRoute = this.activatedRoute.routeConfig?.path;
    })
  }
}
