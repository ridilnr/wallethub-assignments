import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.scss']
})
export class ReadMeComponent implements OnInit {

  invalidForm: boolean;
  email: string;
  errorMessages: {
    emailError: {
      state: boolean,
      message: string
    }
  };
  classBtnSubmit: string;

  constructor(private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute) {
    this.invalidForm = true;
    this.email = '';
    this.errorMessages = {
      emailError: {
        state: true,
        message: ''
      }
    };
    this.classBtnSubmit = 'btn btn-primary ml-5 mt-2 customBtn cursor-not-allowed';
  }

  ngOnInit() {
  }
  // Get AuthService
  getAuthService() {
    return this.authService;
  }
  // This function checks if user entered a valid email address
  checkForEmailError(evt) {
    this.email = evt.target.value;
    if (this.email === '') {
      this.errorMessages.emailError.state = true;
      this.errorMessages.emailError.message = '* Please enter your email address';
    } else {
      const regExpBadFormatEmail = /\S+@\S+\.\S+/;
      const incorrectEmail = regExpBadFormatEmail.test(this.email);
      if (!incorrectEmail) {
        this.errorMessages.emailError.state = true;
        this.errorMessages.emailError.message = '* Please enter a valid email address';
      } else {
        if (!this.email.includes('@wallethub.com')) {
          this.errorMessages.emailError.state = true;
          this.errorMessages.emailError.message = '* This email is a not allowed to access the content of this page';
        } else {
          this.errorMessages.emailError.state = false;
          this.errorMessages.emailError.message = null;
        }
      }
    }
    this.enableBtnSubmit();
  }
  // This function is executed once the form becomes valid and is submitted
  enableBtnSubmit() {
    this.invalidForm = !(this.email !== '' && this.email.includes('@wallethub.com'));
  }
  // This function is executed once the form becomes valid and is submitted
  // And then display data user entered in a new component (card-info)
  // redirects him to that component
  onSubmit(form) {
    form.preventDefault();
    if (!this.invalidForm) {
      this.authService.setCompanyEmailStatus();
      this.router.navigate(['requirements'], {relativeTo: this.route});
    }
  }
}
