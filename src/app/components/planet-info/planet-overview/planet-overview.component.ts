import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPlanet } from '../../../interfaces/planet.interface';
import { PlanetsService } from '../../../services/planets.service';

@Component({
  selector: 'app-planet-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-overview.component.html',
  styleUrl: './planet-overview.component.scss'
})
export class PlanetOverviewComponent {
  currentPlanetName: string = '';
  currentPlanet$: Observable<IPlanet | undefined> = of();
  imageBasedOnRoute: string = '';
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly planetsService = inject(PlanetsService);

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe((value) => {
      this.currentPlanetName = value['planet'];
      this.currentPlanet$ = this.planetsService.getPlanet(this.currentPlanetName);
      
    })

    console.log(this.activatedRoute.routeConfig?.path)

  }
}
