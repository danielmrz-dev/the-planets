import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-overview-card',
  standalone: true,
  imports: [],
  templateUrl: './planet-overview-card.component.html',
  styleUrl: './planet-overview-card.component.scss'
})
export class PlanetOverviewCardComponent {
  @Input({ required: true }) cardTitle: string = '';
  @Input({ required: true }) cardData: string = '';
}
