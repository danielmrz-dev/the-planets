import { Component } from '@angular/core';
import { PlanetInfoNavbarComponent } from "./planet-info-navbar/planet-info-navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-planet-info',
  standalone: true,
  imports: [PlanetInfoNavbarComponent, RouterOutlet],
  templateUrl: './planet-info.component.html',
  styleUrl: './planet-info.component.scss'
})
export class PlanetInfoComponent {}
