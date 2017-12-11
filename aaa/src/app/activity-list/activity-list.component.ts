import { ActivityService } from './../services/activity.service';
import { IActivity } from './../shared/activity.mode';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;
  constructor(private _service: ActivityService) {


   }

  ngOnInit() {
    this.activities = this._service.getActivities();
    this.totalActivities = this._service.getTotalActivities(this.activities);
    this.totalDistance = this._service.getTotalDistance(this.activities);
    this.firstDate = this._service.getFirstDate(this.activities);
  }

}
