import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bike jornal';


  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];
viewMode = 'sdada';
post = {
  title: "Title",
  isFavorite: true,
}

onFavioteChange(eventArgs: FavoriteChangedEventArgs) {
  console.log("change favoirte", eventArgs);
}




}

export interface FavoriteChangedEventArgs {

  newValue: boolean
}
