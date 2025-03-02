import { Injectable } from '@angular/core';
import { apiUrl } from './apiUrl';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPlanet } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private readonly api: string = apiUrl;

  constructor(private readonly _http: HttpClient) {}

  getPlanets(): Observable<IPlanet[]> {
    return this._http.get<IPlanet[]>(this.api);
  }

  getPlanet(planetName: string): Observable<IPlanet | undefined> {
    return this._http.get<IPlanet[]>(this.api).pipe(
      map((planetsList) => {
        if (!planetsList) return;
        return planetsList.find(planet => planet.name.toLowerCase() === planetName)
      })
    );
  }

  
}
