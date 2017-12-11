import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  <h2>compenent: {{ title }} </h2>
  <div (click)="onDivClick()">
<button class="btn btn-primary" [class.active]="isActive"  [style.background-color]="isActive?'blue':'white'"
(click)="onSave($event)"
>Click me</button>

</div>
<input #mail (keyup)="onKeyUp($event)" (keyup.space)="onSpaceUp(mail.value)" />
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  isActive : Boolean = false  ;

  title = '  Course Work!';

  onDivClick()
  {
    console.log("Div was click");
  }
  onSave($event)
  {
    console.log("Button was click",$event);
    $event.stopPropagation();
    
  }

  onKeyUp($event)
  {
    if ($event.keyCode ==13) {
      console.log("Enter was press");
      
    }
  }

  onSpaceUp(mail)
  {
    console.log("Space was press",mail);   
  }

  constructor() { }

  ngOnInit() {


  }

}
