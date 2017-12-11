import { SAVED_ACTIVITIRS } from './../shared/activities';
import { IActivity } from './../shared/activity.mode';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivityService {

  constructor() { }
  getActivities(): IActivity[] {
    return SAVED_ACTIVITIRS.slice(0);
  }
  getTotalActivities(allActivities: IActivity[]) {
    return allActivities.length;
  }

  getTotalDistance(allActivities: IActivity[]) {
    let distance = 0;
    allActivities.forEach((e) => distance += e.distance);
    return distance;
  }

  getFirstDate(allActivities: IActivity[]) {
    let earlistDate = new Date('1/1/9999');
    for (let i = 0; i < allActivities.length, i++;) {
      var currentDate = allActivities[i].date;
      if (currentDate < earlistDate) {
        earlistDate = currentDate;
      }
    }
    return earlistDate;
  }
}

