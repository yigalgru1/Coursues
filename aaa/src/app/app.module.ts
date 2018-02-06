import { FollowerService } from './services/follower.service';
import { AppErrorHandler } from './common/app-error-handler';
import { AppError } from './common/app-error';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { FavoriteComponent } from './favorite/favorite.component';

import { appRoutes } from '../routes';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponent } from './post/post.component';
import { FollowerComponent } from './follower/follower.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MapComponent,
    ActivityListComponent,
    SummaryPipe,
    FavoriteComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    PostComponent,
    FollowerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CoursesService,
    ActivityService,
    MapService,
    PostService,
    FollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
