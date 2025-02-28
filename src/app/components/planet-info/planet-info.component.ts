import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PlanetInfoNavbarComponent } from "./planet-info-navbar/planet-info-navbar.component";

@Component({
  selector: 'app-planet-info',
  standalone: true,
  imports: [PlanetInfoNavbarComponent],
  templateUrl: './planet-info.component.html',
  styleUrl: './planet-info.component.scss'
})
export class PlanetInfoComponent {

}
