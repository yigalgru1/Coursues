import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bike jornal';

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
