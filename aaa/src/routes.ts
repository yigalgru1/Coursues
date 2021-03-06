import { ActivityListComponent } from './app/activity-list/activity-list.component';
import { MapComponent } from './app/map/map.component';
import { Routes } from "@angular/router"



export const appRoutes: Routes = [
  { path: "runs", component: ActivityListComponent },
  { path: "run/:id", component: MapComponent },
  { path: "runall/:id", component: MapComponent },
  { path: "", redirectTo: "/runs", pathMatch: 'full' }
]
