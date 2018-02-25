import { Component, OnInit } from '@angular/core';
import * as L from 'mapbox.js';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    L.mapbox.accessToken = 'pk.eyJ1IjoieWlnYWxncnUiLCJhIjoiY2piM2VlNmZ3MmtrNjJ3cWs1NXViaW1wdiJ9.QQYcKh8R86lBXINgnnW1uQ';
    var map = L.mapbox.map('map', 'mapbox.dc-markers');

    map.featureLayer.on('click', function(e) {
        map.panTo(e.layer.getLatLng());
    });
  }

}
