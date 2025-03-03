import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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

}
