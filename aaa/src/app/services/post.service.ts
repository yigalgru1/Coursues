import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPost() {
    return this.http.get(this.url);
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  // update new in backend
  // using patch update only spesipic properits
  // using put update whole elememt
  updatePost(id: number) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true }))
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }


}
