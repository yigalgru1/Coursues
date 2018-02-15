import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private service: ActivatedRoute) { console.log("params"); }

  ngOnInit() {

    this.service.paramMap.subscribe((params) => {
      let sss = + params.get('id');
      let login = params.get('login');
      console.log(sss);
      console.log(login);
    });
  }

}
