import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planetCircleColor',
  standalone: true
})
export class PlanetCircleColorPipe implements PipeTransform {

  transform(planetName: string): string {

    const colors: { [key: string]: string } = {
      mercury: '#DEF4FC',
      venus: '#F7CC7F',
      earth: '#545BFE',
      mars: '#FF6A45',
      jupiter: '#ECAD7A',
      saturn: '#FCCB6B',
      uranus: '#65F0D5',
      neptune: '#497EFA',
    }

    return colors[planetName];
  }

}
