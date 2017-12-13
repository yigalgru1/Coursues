import { SAVED_ACTIVITIES } from './../shared/activities';
import { IActivity } from './../shared/activity.mode';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { ActivityService } from '../services/activity.service';
import { log } from 'util';
import { forEach } from '@angular/router/src/utils/collection';


var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Injectable()
export class MapService {

  constructor() { }

  getActivity(id?: number) {

    if (id > SAVED_ACTIVITIES.length) {
      console.log("id great from activites");
      return SAVED_ACTIVITIES.slice(0);
    }

    return SAVED_ACTIVITIES.slice(0).find(run => run.id == id)
  }




  plotActivity(id?: number) {
    var myStyle = {
      "color": "#3949AB",
      "weight": 3,
      "opacity": 0.95
    };
    var myStyle2 = {
      "color": "red",
      "weight": 3,
      "opacity": 0.95
    };

    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGlhdGRhIiwiYSI6ImNqOXpybWxoNzV0Y2Myd212OWFjZ2xrdXMifQ.w-GvqYH3T10qHCKBn_Z-IA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'apitoken',
    }).addTo(map);

    /*
    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 18,
     id: 'mapbox.dark',
     accessToken: apiToken
   }).addTo(map);
*/
    var customLayer = L.geoJson(null, {
      style: myStyle
    });

    var customLayer2 = L.geoJson(null, {
      style: myStyle2
    });


    if (id > SAVED_ACTIVITIES.length) {
      console.log("no data in id :" + id);

      for (let i = 0; i < SAVED_ACTIVITIES.length; i++) {
        let nid = SAVED_ACTIVITIES[i].id;
         var gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id == nid).gpxData, null, customLayer2)
          .on('ready', function () {
            map.fitBounds(gpxLayer.getBounds());
          });

        if (i + 1 == SAVED_ACTIVITIES.length) {
          console.log(gpxLayer._layers);
          gpxLayer.addTo(map);
        }

      }


    }
    else {
      var gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id == id).gpxData, null, customLayer)
        .on('ready', function () {
          map.fitBounds(gpxLayer.getBounds());
          gpxLayer.eachLayer(function (layer) {

            // See the `.bindPopup` documentation for full details. This
            // dataset has a property called `name`: your dataset might not,
            // so inspect it and customize to taste.
            layer.bindPopup(layer.feature.properties.name);
            console.log(layer.feature.properties);
          });
        }).addTo(map);
    }
  }

}
