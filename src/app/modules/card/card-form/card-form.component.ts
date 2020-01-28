import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../../../can-deactivate-guard.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})

export class CardFormComponent implements OnInit, CanComponentDeactivate {
  // Declare object model for user card application
  cardData: {
    fullName: string,
    homeAddress: string,
    email: string,
    income: string,
  };
  // Declare object model for any error that may happens when user fill the form
  errorMessages: {
    fullNameError: {
      state: boolean,
      message: string
    },
    homeAddressError: {
      state: boolean,
      message: string
    },
    emailError: {
      state: boolean,
      message: string
    },
    incomeError: {
      state: boolean,
      message: string
    }
  };
  //
  invalidForm: boolean;
  classBtnSubmit: string;
  formSubmitted: boolean;
  //
  constructor(private router: Router, private route: ActivatedRoute) {
    this.cardData = {
      fullName: '',
      homeAddress: '',
      email: '',
      income: '0',
    };
    this.errorMessages = {
      fullNameError: {
        state: true,
        message: '* This field is required'
      },
      homeAddressError: {
        state: true,
        message: '* This field is required'
      },
      emailError: {
        state: true,
        message: '* This field is required'
      },
      incomeError: {
        state: true,
        message: '* This field is required'
      }
    };
    this.invalidForm = true;
    this.classBtnSubmit = 'btn btn-primary mt-2 customBtn cursor-not-allowed';
    this.formSubmitted = false;
  }

  ngOnInit() {
  }
  // This function checks if user entered his name or names and entered a non valid name or names
  checkForFullNameError(evt) {
    this.cardData.fullName = evt.target.value;
    if (this.cardData.fullName === '') {
      this.errorMessages.fullNameError.state = true;
      this.errorMessages.fullNameError.message = '* Please enter your full name !';
    } else {
      const regExpBadFormatName = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]/;
      const incorrectName = regExpBadFormatName.test(this.cardData.fullName);
      if (incorrectName) {
        this.errorMessages.fullNameError.state = true;
        this.errorMessages.fullNameError.message = '* Please enter a valid full name !';
      } else {
        if (this.cardData.fullName.length < 10) {
          this.errorMessages.fullNameError.state = true;
          this.errorMessages.fullNameError.message = '* Full Name must contain at least 10 characters !';
        } else {
          this.errorMessages.fullNameError.state = false;
          this.errorMessages.fullNameError.message = null;
        }
      }
    }
    this.enableBtnSubmit();
  }
  // This function checks if user entered properly his home address
  checkForHomeAddressError(evt) {
    this.cardData.homeAddress = evt.target.value;
    if (this.cardData.homeAddress === '') {
      this.errorMessages.homeAddressError.state = true;
      this.errorMessages.homeAddressError.message = '* Please enter your home address !';
    } else {
      const regExpBadFormatHomeAddress = /[!@#$%^&*()_+\-=\[\]{}"\\|<>\/]/;
      const incorrectName = regExpBadFormatHomeAddress.test(this.cardData.homeAddress);
      if (incorrectName) {
        this.errorMessages.homeAddressError.state = true;
        this.errorMessages.homeAddressError.message = '* Please enter a valid home address !';
      } else {
        if (this.cardData.homeAddress.length < 15) {
          this.errorMessages.homeAddressError.state = true;
          this.errorMessages.homeAddressError.message = '* Home Address must contain at least 15 characters !';
        } else {
          this.errorMessages.homeAddressError.state = false;
          this.errorMessages.homeAddressError.message = null;
        }
      }
    }
    this.enableBtnSubmit();
  }
  // This function checks if user entered a valid email address
  checkForEmailError(evt) {
    this.cardData.email = evt.target.value;
    if (this.cardData.email === '') {
      this.errorMessages.emailError.state = true;
      this.errorMessages.emailError.message = '* Please enter your email address';
    } else {
      const regExpBadFormatEmail = /\S+@\S+\.\S+/;
      const incorrectEmail = regExpBadFormatEmail.test(this.cardData.email);
      if (!incorrectEmail) {
        this.errorMessages.emailError.state = true;
        this.errorMessages.emailError.message = '* Please enter a valid email address';
      } else {
        this.errorMessages.emailError.state = false;
        this.errorMessages.emailError.message = null;
      }
    }
    this.enableBtnSubmit();
  }
  // This function checks if user entered his monthly income and restricts amount to be more than $1000
  checkForIncomeError(evt) {
    this.cardData.income = evt.target.value;
    if (this.cardData.income === '') {
      this.errorMessages.incomeError.state = true;
      this.errorMessages.incomeError.message = '* Please enter your monthly income !';
    } else if (isNaN(Number(this.cardData.income))) {
      this.errorMessages.incomeError.state = true;
      this.errorMessages.incomeError.message = '* Please enter a valid number !';
    } else {
      if (Number(this.cardData.income) < 1000) {
        this.errorMessages.incomeError.state = true;
        this.errorMessages.incomeError.message = '* Monthly income can not be less than $1,000 !';
      } else {
        this.errorMessages.incomeError.state = false;
        this.errorMessages.incomeError.message = null;
      }
    }
    this.enableBtnSubmit();
  }
  // This function convert user income number to the correct usa format
  convertIncomeToUsdFormat(val) {
    val = Number(val);
    const currencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    return this.cardData.income = isNaN(val) ? currencyFormat.format(0) : currencyFormat.format(val);
  }
  // This function is executed once the form becomes valid and is submitted
  enableBtnSubmit() {
    this.invalidForm = !(this.cardData.fullName !== '' && this.cardData.homeAddress !== '' &&
      this.cardData.email !== '' && this.cardData.income !== null &&
      this.cardData.income.toString() !== '' && this.cardData.income.toString().length >= 4);
  }
  // This function is executed once the form becomes valid and is submitted
  // And then display data user entered in a new component (card-info) and
  // redirects him to that component
  onSubmit(form) {
    form.preventDefault();
    this.formSubmitted = true;
    this.router.navigate(['info'], {relativeTo: this.route, state: {data: this.cardData}})
      .then();
  }
  // This function is exceuted when user did not finish to enter his data or did not submit his form
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // return confirm('If you leave this page, all changes made on this page will be lost. Are you sure you want to leave ?');
    if ((this.cardData.fullName !== '' || this.cardData.homeAddress !== '' || this.cardData.email !== null
      || this.cardData.income !== '') && !this.formSubmitted) {
      return confirm('Do you really want to discard changes made on this page ?');
    } else  {
      return true;
    }
  }
}
