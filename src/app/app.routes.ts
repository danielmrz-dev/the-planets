import { Routes } from '@angular/router';
import { PlanetInfoComponent } from './components/planet-info/planet-info.component';
import { PlanetOverviewComponent } from './components/planet-info/planet-overview/planet-overview.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/planets/mercury',
        pathMatch: 'full'
    },
    {
        path: 'planets/:planet',
        component: PlanetInfoComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: PlanetOverviewComponent
            },
            // {
            //     path: 'structure',
            // },
            // {
            //     path: 'surface',
            // },
        ]
    },

];
