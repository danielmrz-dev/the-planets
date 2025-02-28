import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-planet-info-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './planet-info-navbar.component.html',
  styleUrl: './planet-info-navbar.component.scss'
})
export class PlanetInfoNavbarComponent {

}
