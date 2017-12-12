import { Routes } from '@angular/router';
import { MapComponent } from './app/map/map.component';
import { ActivityListComponent } from './app/activity-list/activity-list.component';
import { Route } from '@angular/compiler/src/core';

export const appRoutes: Routes = [
    { path: "runs", component: ActivityListComponent },
    { path: "runs/:id", component: MapComponent },
    { path: "", redirectTo:"/runs", pathMatch:'full' }
]

