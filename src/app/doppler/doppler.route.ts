import { Routes } from "@angular/router";
import { DopplerComponent } from './doppler.component';

export const DopplerRoute: Routes = [
    {
        path: 'doppler',
        component: DopplerComponent,
        data: { title: 'Doppler Effects' }
    }
]