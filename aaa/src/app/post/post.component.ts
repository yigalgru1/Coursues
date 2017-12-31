import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { posix } from 'path';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http.get(this.url).
      subscribe(response => {
        console.log(response.json());
        this.posts = response.json()
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(res => {
        console.log(res.json());
        post['id'] = res.json().id;
        console.log(post);
        this.posts.splice(0, 0, post);
      });

  }

  ngOnInit() {
  }

}
