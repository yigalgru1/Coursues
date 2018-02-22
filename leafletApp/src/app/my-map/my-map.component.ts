import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';
import { GeoJson, FeatureCollection } from '../map';

@Component({
  selector: 'my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.css']
})
export class MyMapComponent implements OnInit {


  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World!';

  // data
  source: any;
  markers: any;

  constructor() {

  }

  ngOnInit() {
    //  this.markers = this.mapService.getMarkers()
    //  this.initializeMap()
    //var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoieWlnYWxncnUiLCJhIjoiY2piM2VlNmZ3MmtrNjJ3cWs1NXViaW1wdiJ9.QQYcKh8R86lBXINgnnW1uQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-77.04, 38.907],
      zoom: 11.15
    });

    map.on('load', function () {

      var width = 64; // The image will be 64 pixels square
      var bytesPerPixel = 4; // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
      var data = new Uint8Array(width * width * bytesPerPixel);
  
      for (var x = 0; x < width; x++) {
          for (var y = 0; y < width; y++) {
              var offset = (y * width + x) * bytesPerPixel;
              data[offset + 0] = y / width * 255; // red
              data[offset + 1] = x / width * 255; // green
              data[offset + 2] = 128;             // blue
              data[offset + 3] = 255;             // alpha
          }
      }
  
      map.addImage('gradient', {width: width, height: width, data: data});
  
      map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
              "type": "geojson",
              "data": {
                  "type": "FeatureCollection",
                  "features": [{
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [11, 11]
                      }
                  }]
              }
          },
          "layout": {
              "icon-image": "gradient"
          }
      });
    });



    map.on('load', function() {
      map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
          if (error) throw error;
          map.addImage('cat', image);
          map.addLayer({
              "id": "points1",
              "type": "symbol",
              "source": {
                  "type": "geojson",
                  "data": {
                      "type": "FeatureCollection",
                      "features": [{
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [0, 0]
                          }
                      }]
                  }
              },
              "layout": {
                  "icon-image": "cat",
                  "icon-size": 0.25
              }
          });
      });
  });

  }
  private initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        //    this.map.flyTo({
        //     center: [this.lng, this.lat]
        //   })
      });
    }


    this.buildMap();

  }

  buildMap() {


    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
      accessToken: 'pk.eyJ1IjoieWlnYWxncnUiLCJhIjoiY2piM2VlNmZ3MmtrNjJ3cWs1NXViaW1wdiJ9.QQYcKh8R86lBXINgnnW1uQ'

    });



    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());


    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      const newMarker = new GeoJson(coordinates, { message: this.message })
      //     this.mapService.createMarker(newMarker)
    })


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {

      /// register source
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      /// get source
      this.source = this.map.getSource('firebase')

      /// subscribe to realtime database and set data source
      this.markers.subscribe(markers => {
        let data = new FeatureCollection(markers)
        this.source.setData(data)
      })

      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      })

    })

  }


  /// Helpers

  removeMarker(marker) {
    //    this.mapService.removeMarker(marker.$key)
  }

  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    })
  }
}
