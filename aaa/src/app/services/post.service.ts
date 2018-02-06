import { BadInput } from './../common/bad-input';
import { NoFoundError } from './../common/no-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/opertator/catch';
import { Observable } from 'rxjs/Rx'
import { AppError } from 'app/common/app-error';


@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPost() {
    return this.http.get(this.url);
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id).catch(this.handleError);
  }

  // update new in backend
  // using patch update only spesipic properits
  // using put update whole elememt
  updatePost(id: number) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true })).catch(this.handleError);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    else if (error.status === 404)
      return Observable.throw(new NoFoundError());
      return Observable.throw(new AppError(error.json()));
  }

}
