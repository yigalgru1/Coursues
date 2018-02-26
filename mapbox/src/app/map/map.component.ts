import { Component, OnInit } from '@angular/core';
//import * as L from 'mapbox.js';
declare var L: any;
declare var Leaflet: any;
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

  filters: any;
  mark: any;
  layers: any;
  overlays: any;

  constructor() { }

  ngOnInit() {
    L.mapbox.accessToken = 'pk.eyJ1IjoieWlnYWxncnUiLCJhIjoiY2piM2VlNmZ3MmtrNjJ3cWs1NXViaW1wdiJ9.QQYcKh8R86lBXINgnnW1uQ';

    this.rotate();
    var map = L.mapbox.map('map')
      .setView([38.9, -77], 13)
      .addLayer(L.mapbox.tileLayer('mapbox.streets'));


    this.filters = document.querySelectorAll("input[name='filters']");

    this.overlays = L.layerGroup().addTo(map);
    console.log("overlays");
    console.log(this.overlays);




    L.mapbox.featureLayer()

      .loadURL('https://www.mapbox.com/mapbox.js/assets/data/stations.geojson')
      .on('ready', e => {
        this.layers = e.target;

        this.showStations();
      });



    var marker = L.rotatedMarker(new L.LatLng(37.9, -77), {
      icon: L.divIcon({
        className: 'svg-marker',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  viewBox="0 0 15 15"><path d="M15 6.818V8.5l-6.5-1-.318 4.773L11 14v1l-3.5-.682L4 15v-1l2.818-1.727L6.5 7.5 0 8.5V6.818L6.5 4.5v-3s0-1.5 1-1.5 1 1.5 1 1.5v2.818l6.5 2.5z"/></svg>',
        iconSize: [15, 15],
      }),
      draggable: false
    });

    marker.options.angle = 45;
    marker.addTo(map);

    this.mark = marker;
    console.log(this.mark);
    console.log(this.mark.options.angle);


    var direction = 0, manual = false;


    marker.addTo(map);


    var geojson = {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        // The coordinate -233.9 is technically invalid but Leaflet
        // permits it because it can imply the direction of wrapping -
        // to wrap in a direction, you can add or subtract 360 from
        // the desired end coordinate.
        coordinates: [[-77, 37.9], [-233.9, 36.5]]
      },
      properties: {
        "stroke": "#ff8888",
        "stroke-opacity": 0.5,
        "stroke-width": 4,
      }

    };

    //adding currnt style
    L.geoJson(geojson, { style: L.mapbox.simplestyle.style }).addTo(map);


    // Start with a fixed marker.
    var fixedMarker = L.marker(new L.LatLng(38.9131775, -77.032544), {
      icon: L.mapbox.marker.icon({
        'marker-color': 'ff8888'
      })
    }).bindPopup('Mapbox DC').addTo(map);

    // Store the fixedMarker coordinates in a variable.
    var fc = fixedMarker.getLatLng();

    // Create a featureLayer that will hold a marker and linestring.
    var featureLayer = L.mapbox.featureLayer().addTo(map);


    // When a user clicks on the map we want to
    // create a new L.featureGroup that will contain a
    // marker placed where the user selected the map and
    // a linestring that draws itself between the fixedMarkers
    // coordinates and the newly placed marker.
    map.on('click', function (ev) {
      // ev.latlng gives us the coordinates of
      // the spot clicked on the map.
      var c = ev.latlng;

      var geojson = {
        type: 'FeatureCollection',
        features: [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [c.lng, c.lat]
            },
            "properties": {
              "marker-color": "#ff8888"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [fc.lng, fc.lat],
                [c.lng, c.lat]
              ]
            },
            "properties": {
              "stroke": "#000",
              "stroke-opacity": 0.5,
              "stroke-width": 4
            }
          }
        ]
      };

      featureLayer.setGeoJSON(geojson);

      // Finally, print the distance between these two points
      // on the screen using distanceTo().
      var container = document.getElementById('distance');

      console.log(fc);


      container.innerHTML = (fc.distanceTo(c)).toFixed(0) + 'm';

    });
  };



  changeAngle() {
    console.log("change angle");

    // this.rotate();
    var ll = this.mark.getLatLng();
    this.mark.options.angle = this.mark.options.angle + 15;
    this.mark.setLatLng(ll);


    console.log(this.mark.options.angle);
  }


  rotate() {

    L.RotatedMarker = L.Marker.extend({
      options: { angle: 0 },
      _setPos: function (pos) {
        L.Marker.prototype._setPos.call(this, pos);
        if (L.DomUtil.TRANSFORM) {
          // use the CSS transform rule if available
          this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)   ';
        } else if (L.Browser.ie) {
          // fallback for IE6, IE7, IE8
          var rad = this.options.angle * L.LatLng.DEG_TO_RAD,
            costheta = Math.cos(rad),
            sintheta = Math.sin(rad);
          this._icon.style.filter += ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=' +
            costheta + ', M12=' + (-sintheta) + ', M21=' + sintheta + ', M22=' + costheta + ')';
        }
        //console.log(pos);
        console.log(22);
      }
    });
    L.rotatedMarker = function (pos, options) {
      // console.log(pos);
      return new L.RotatedMarker(pos, options);
    };





  }
  showStations() {
    console.log("showStations");
    console.log(this.filters);
    // first collect all of the checked boxes and create an array of strings
    // like ['green', 'blue']
    var list = [];
    for (var i = 0; i < this.filters.length; i++) {
      if (this.filters[i].checked) list.push(this.filters[i].value);
    }
    // then remove any previously-displayed marker groups
    this.overlays.clearLayers();

    console.log(L);
    console.log(Leaflet);




 
    
        // create a new marker group
        var clusterGroup = new L.MarkerClusterGroup().addTo(this.overlays);
        // and add any markers that fit the filtered criteria to that group.
        this.layers.eachLayer(function (layer) {
          if (list.indexOf(layer.feature.properties.line) !== -1) {
            clusterGroup.addLayer(layer);
          }
         
        }); 
  }


}


