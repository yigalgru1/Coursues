import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [33, 36];
const defaultZoom: number = 8

@Component({
  selector: 'map-controller',
  templateUrl: './map-controller.component.html',
  styleUrls: ['./map-controller.component.css'],
})

export class MapControllerComponent implements OnInit {

  constructor() { }




  ngOnInit() {


    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;



    let line_points = [
      [33.893596444352134, 36.0381498336792],
      [33.89337933372204, 36.03792452812195],
      [33.89316222242831, 36.03761339187622],
      [33.893028615148424, 36.03731298446655],
      [33.892920059048464, 36.03691601753235],
      [33.892903358095296, 36.03637957572937],
      [33.89301191422077, 36.03592896461487],
      [33.89316222242831, 36.03549981117249],
      [33.89340438498248, 36.03514575958252],
      [34.893596444352134, 37.0349633693695]
    ];


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGlhdGRhIiwiYSI6ImNqOXpybWxoNzV0Y2Myd212OWFjZ2xrdXMifQ.w-GvqYH3T10qHCKBn_Z-IA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.run-bike-hike',
      accessToken: 'apitoken',
    }).addTo(map);


    var polyline_options = {
      color: 'red'
    };


    var ellipsed_options = {
      color: 'blue'
    };

    console.log(L);


    // var ellipsed = L.ellipse([35.893596444352134, 37.0349633693695], [500, 100], 90).addTo(map);
    var circle_options = {
      color: 'blue',      // Stroke color
      opacity: 1,         // Stroke opacity
      weight: 10,         // Stroke weight
      fillColor: 'blue',  // Fill color
      fillOpacity: 0.6    // Fill opacity
    };
    var ellipse = L.ellipse([36.5, 36.5], [5000, 100], 45, circle_options).addTo(map);

    var circle_one = L.circle([35.89415, 37.03738], 500, circle_options).addTo(map);

    var polyline = L.polyline(line_points, polyline_options).addTo(map);



    map.on('click', function (e) {
      var _firstLatLng = e.latlng;
      var _firstPoint = e.layerPoint;
      console.log(_firstLatLng);
      console.log(_firstPoint);
    });





    var point1 = { lat: 33.37641235124679, lng: 36.46293756913659 };

    var destinationPoint = L.GeometryUtil.destination(point1, 66, 400000);

    var latlngs1 = [
      point1,
      destinationPoint,
    ];

    //draw a simple line using a straight line by destance and angle parameters
    var polyline = L.polyline(latlngs1, { color: 'red', width: 20 }).addTo(map);

    console.log(destinationPoint);

    var berlin = new L.LatLng(52.5, 13.35);
    var losangeles = new L.LatLng(33.82, -118.38);

/*
    var Geodesic = L.geodesic([], {
      weight: 7,
      opacity: 0.5,
      color: 'blue',
      steps: 50
    }).addTo(map);


    Geodesic.setLatLngs([[berlin, losangeles]]);
*/

  }

}

