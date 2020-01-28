import {Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnChanges {
  // Making use of customer object coming from the parent component
  @Input() customer: { avatar: string, name: string, comment: string, rating: number };
  constructor() { }

  ngOnChanges() {
    alert('Remember ! You can not edit your comment but you can instead add a new one.');
  }

  ngOnInit() {
  }
}
