import { FavoriteComponent } from './favorite/favorite.component';

import { appRoutes } from '../routes';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { MapComponent } from './map/map.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityService } from 'app/services/activity.service';
import { MapService } from 'app/services/map.service';
import { RouterModule } from '@angular/router';
import { SummaryPipe } from 'app/summary.pipe';
import { LikeComponent } from './like/like.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MapComponent,
    ActivityListComponent,
    SummaryPipe,
    FavoriteComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CoursesService, ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
