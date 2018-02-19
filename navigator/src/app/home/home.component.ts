import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives;
  constructor() { }

  ngOnInit() {
    this.archives = [
      { year: 1, month: 1 },
      { year: 2, month: 2 },
      { year: 3, month: 3 },
    ]
  }

}
