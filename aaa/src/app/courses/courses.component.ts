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
<input [value]="email" (keyup.enter)="email = $event.target.value  ; onKeyUp($event)"   />
<input [(ngModel)]="email" (keyup.enter)="onKeyUp2()" />
<hr/>
{{emailq | summary : 10 }}


<p (click)="changestar()">Envelope icon:
 <span class="glyphicon " [class.glyphicon-star-empty]="!isActive2"  [class.glyphicon-star]="isActive2" >
</span>
</p> 

  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  isActive: Boolean = false;
  email = "me@exemple.com";
  emailq = "saddasd sadsadjda sdajdsjkdsajdksjakds dsjksadkjdsajdasjkdsakj dsjkadskjadskjdsajkas";

  title = '  Course Work!';
  isActive2 =false;

  changestar(){
    this.isActive2 = !this.isActive2;
    console.log('star was clicked'+ this.isActive2);
  }

  onDivClick() {
    console.log('Div was click');
  }
  onSave($event) {
    console.log('Button was click', $event);
    $event.stopPropagation();

  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter was press');
      console.log(this.email);
    }
  }

  onKeyUp2() {
       console.log('Enter was press');
      console.log(this.email);
    
  }

  onSpaceUp(mail) {
    console.log('Space was press', mail);
  }

  constructor() { }

  ngOnInit() {


  }

}
