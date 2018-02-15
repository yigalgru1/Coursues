import { Observable } from 'rxjs/Rx';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService, private rout: ActivatedRoute) { }

  ngOnInit() {

    Observable.combineLatest([
      this.rout.paramMap,
      this.rout.queryParamMap
    ])
      .switchMap((combined) => {
        let id = + combined[0].get('id');
        let page = + combined[1].get('page');
        console.log("page:" + page);
        return this.service.getAll()
      })
      .subscribe(followers => this.followers = followers);
    console.log("getAll");

  }
}
