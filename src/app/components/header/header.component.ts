import { A11yModule } from '@angular/cdk/a11y';
import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { PlanetOptionComponent } from "../planet-option/planet-option.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [A11yModule, PlanetOptionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input({ required: true }) drawer!: MatDrawer;
  
}
