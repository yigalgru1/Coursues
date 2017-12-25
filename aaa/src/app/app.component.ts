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

  tweet = {
    body: "some text",
    isLike: false,
    likeCount: 0
  }

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
  viewMode = 'sdada';
  onlikeChange(eventArgs: LikeChangedEventArgs) {
    //  console.log("change tweet", eventArgs);


    //  this.tweet.isLike = eventArgs.isLike;
    // this.tweet.likeCount = eventArgs.likeCount;

  }

  onFavioteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("change favoirte", eventArgs);
  }

  addCourse() {
    let number = this.courses.length + 1;
    this.courses.push({ id: number, name: 'course' + number })
  }

  removeCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }}
  

export interface LikeChangedEventArgs {

  isLike: boolean
  // likeCount: number
}

export interface FavoriteChangedEventArgs {

  newValue: boolean
}
