import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PlanetCircleColorPipe } from '../../../pipes/planet-circle-color.pipe';

@Component({
  selector: 'app-planet-info-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, PlanetCircleColorPipe],
  templateUrl: './planet-info-navbar.component.html',
  styleUrl: './planet-info-navbar.component.scss'
})
export class PlanetInfoNavbarComponent {

  @Input({ required: true }) planet: string = '';

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  navigate(info: string) {
    console.log(this.planet);
    this.router.navigate(['/planets', this.planet, info]);
    
  }
}
