import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  header;
  constructor(private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((map) => {
      console.log(map);
      this.header ="Archive For " + map.get('year') + "/" + map.get('month');
    });

  }

}
