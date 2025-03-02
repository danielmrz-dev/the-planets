import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { PlanetCircleColorPipe } from '../../../pipes/planet-circle-color.pipe';

@Component({
  selector: 'app-planet-info-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, PlanetCircleColorPipe],
  templateUrl: './planet-info-navbar.component.html',
  styleUrl: './planet-info-navbar.component.scss'
})
export class PlanetInfoNavbarComponent {
  planet: string = '';

  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.planet = params.get('planet') as string;
    })
  }
}
