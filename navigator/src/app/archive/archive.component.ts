import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  header;
  constructor(private rout: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((map) => {
      console.log(map);
      this.header ="Archive For " + map.get('year') + "/" + map.get('month');
    });



  }


  submit() {
    console.log('submit');
    this.router.navigate(['/'], { queryParams: { page: 1, order: 'newst' } });

  }


}
