import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];
  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts').
      subscribe(response => {
        console.log(response.json());
        this.posts = response.json()
      });
  }

  ngOnInit() {
  }

}
