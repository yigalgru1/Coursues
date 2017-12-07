import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  <h2>compenent: {{ title }} </h2>
<button class="btn btn-primary">Click me</button>

  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = '  Course Work!';

  constructor() { }

  ngOnInit() {


  }

}
