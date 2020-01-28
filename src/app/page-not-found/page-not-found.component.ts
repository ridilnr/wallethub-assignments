import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  pageErrorMessage: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Getting message to be displayed when page is not found
    this.route.data.subscribe(
      (data: Data) => { this.pageErrorMessage = data.message; }
    );
  }

}
