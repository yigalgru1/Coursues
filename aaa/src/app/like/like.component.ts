import { element } from 'protractor';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLike: boolean;
  @Input('likeCount') likeCount: number;

  courses =[1,2];
  constructor() {

  }

  onclick() {
    console.log(this.isLike);
    this.likeCount += this.isLike ? -1 : 1;
    this.isLike = !this.isLike;



  }

  ngOnInit() {

  }

}
