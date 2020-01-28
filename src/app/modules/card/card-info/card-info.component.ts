import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  displayNone = 'd-none';
  errorPage = true;
  registeredCardData: {
    fullName: string,
    homeAddress: string,
    email: string,
    income: string
  };
  constructor(private router: Router,
              private location: Location,
              private route: ActivatedRoute) {
    this.registeredCardData = {
      fullName: '',
      homeAddress: '',
      email: '',
      income: ''
    };
    this.registeredCardData = history.state.data;
    if (this.registeredCardData !== undefined) {
      this.errorPage = false;
      this.displayNone = 'd-block';
    }
  }

  ngOnInit() {
  }
  goToCardForm() {
    this.router.navigate(['../'], {relativeTo: this.route})
      .then();
  }
  goBack() {
    this.location.back();
  }
}
