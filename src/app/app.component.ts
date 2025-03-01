import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlanetOptionComponent } from "./components/planet-option/planet-option.component";
import { PlanetInfoComponent } from "./components/planet-info/planet-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MatSidenavModule, PlanetOptionComponent, PlanetInfoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-planets';
}
