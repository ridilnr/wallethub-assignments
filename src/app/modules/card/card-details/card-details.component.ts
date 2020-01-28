import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  // Declare an array of customer with one initial value
  customers =  [
    { avatar: '../../assets/img/user-icon.png', name: 'Erick Stallone', comment: 'Good Card, I recommand it', rating: 4 }
  ];
  // Function that will push new object into the customer array
  onCommentAdded(commentData: { userName: string, userComment: string, userRating: number }) {
    this.customers.push({
      avatar: '../../assets/img/user-icon.png', name: commentData.userName, comment: commentData.userComment, rating: commentData.userRating
    });
  }
  constructor(private location: Location) {}

  ngOnInit() {
  }
  // redirects to the previous route
  goBack() {
    this.location.back();
  }
}
