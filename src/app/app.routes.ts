import { Routes } from '@angular/router';
import { SeriesListComponent } from './series/series-list/series-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'series', pathMatch: 'full' },
  { path: 'series', component: SeriesListComponent }
];
