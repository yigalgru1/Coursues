import { IActivity } from './activity.mode';
/*export const SAVED_ACTIVITIES: IActivity[] = [
    {
        id: 1,
        name: "Main bike traning",
        distance: 18.2,
        date: new Date('01/12/2017'),
        comments: "Nice day, cool temps",
        gpxData: '../../assents/gpx/2017-12-11.21.41.13.gpx'
    },
    {
        id: 2,
        name: "Second bike traning",
        distance: 16.2,
        date: new Date('01/10/2017'),
        comments: "Nice day, average temps",
        gpxData: '../../assents/gpx/2017-12-11.21.44.06.gpx'
    },
    {
        id: 3,
        name: 'Thrid bike traning',
        distance: 30.2,
        date: new Date('01/11/2017'),
        comments: "Nice day, hot temps",
        gpxData: '../../assents/gpx/2017-12-11.21.41.13.gpx'
    },

]
*/
export const SAVED_ACTIVITIES: IActivity[] = [
{
  "id" : 1,
  "name" : "Main Bike Trails",
  "date" : new Date('06/01/2017'),
  "distance" : 16.2,
  "comments" : "Nice day, cool temps",
  "gpxData": '../../assets/gpx/2017-12-11.21.41.13.gpx'
},
{
   "id": 2,
   "name": 'Industrial Park',
   "date": new Date('06/04/2017'),
   "gpxData": '../../assets/gpx/2017-12-12.17.06.13.gpx',
   "distance": 30.2,
   "comments": 'Cool and windy.'
 },
 {
   "id": 3,
   "name": 'Forest Route',
   "date": new Date('06/05/2017'),
   "gpxData": '../../assets/gpx/2017-12-12.17.19.12.gpx',
   "distance": 3.2,
   "comments": 'Evening run.'
 }
 
]