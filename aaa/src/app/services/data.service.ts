import { BadInput } from './../common/bad-input';
import { NoFoundError } from './../common/no-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/opertator/catch';
import { Observable } from 'rxjs/Rx'
import { AppError } from 'app/common/app-error';


@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(respose => respose.json())
      .catch(this.handleError);
  }

  delete(id: number) {
 // return  Observable.throw(new AppError());
    return this.http.delete(this.url + '/' + id)
    .map(respose => respose.json())
    .catch(this.handleError);
  }

  // update new in backend
  // using patch update only spesipic properits
  // using put update whole elememt
  update(id: number) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true }))
          .map(respose => respose.json())
          .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .map(respose => respose.json()).
    catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    else if (error.status === 404)
      return Observable.throw(new NoFoundError());
    return Observable.throw(new AppError(error.json()));
  }

}
