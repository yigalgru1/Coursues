import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';

@Injectable()
export class MapService {

  constructor(private db) {
    mapboxgl.accessToken = environment.MAPBOX_API_KEY
  }


  getMarkers() {
    return this.db.list('/markers')
  }

  createMarker(data: GeoJson) {
    return this.db.list('/markers')
                  .push(data)
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove()
  }
}
