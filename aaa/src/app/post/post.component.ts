import { NoFoundError } from './../common/no-found-error';
import { PostService } from './../services/post.service';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
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
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(res => {
        console.log(res);
        post['id'] = res.id;
        console.log(post);
      },
      (error: AppError) => {
        this.posts.slice(0, 1);
        
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
    this.service.update(post.id)
      .subscribe(res => {
        console.log(res);
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
    this.service.delete(345)
      .subscribe(res => {
        console.log(res);
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
    this.service.getAll().
      subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      });
  }

}
