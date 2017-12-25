import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input("isFavorite") isSelected: boolean;
  @Output("change") click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changestar() {
    this.isSelected = !this.isSelected;
    console.log('star was clicked' + this.isSelected);
    this.click.emit({ newValue: this.isSelected });
  }



}
