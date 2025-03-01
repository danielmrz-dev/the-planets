import { Routes } from '@angular/router';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/planets/mercury',
        pathMatch: 'full'
    },
    {
        path: 'planets/:planet',
        component: PlanetInfoComponent
    },

];
