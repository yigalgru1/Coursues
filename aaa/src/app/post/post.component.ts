import { NoFoundError } from './../common/no-found-error';
import { PostService } from './../services/post.service';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import { AppError } from 'app/common/app-error';
import { BadInput } from 'app/common/bad-input';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }
  //add new item to backend
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(res => {
        console.log(res.json());
        post['id'] = res.json().id;
        console.log(post);
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof NoFoundError)
          alert('This post has already been deleted.')
          else {
            throw error;
          }
      });

  }

  // update new in backend
  // using patch update only spesipic properits
  // using put update whole elememt
  updatePost(post) {
    this.service.updatePost(post.id)
      .subscribe(res => {
        console.log(res.json());
      },
      (error: AppError) => {
        if (error instanceof BadInput)
          alert('This post has already been deleted.')
        else {
          throw error;
        }
      });
  }


  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(res => {
        console.log(res.json());
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NoFoundError)
          alert('This post has already been deleted.')
        else {
          throw error;
        }
      });
  }


  ngOnInit() {
    this.service.getPost().
      subscribe(response => {
        console.log(response.json());
        this.posts = response.json()
      });
  }

}
