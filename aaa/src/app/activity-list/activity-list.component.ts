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
  constructor(private service: ActivityService) { }

  ngOnInit() {
  }

}
