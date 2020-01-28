import { Component, OnInit } from '@angular/core';
import {CanComponentDeactivate} from '../can-deactivate-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, CanComponentDeactivate {
  feedback: {
    name: string,
    grade: number,
    comments: string
  };
  errorMessages: {
    nameError: {
      state: boolean,
      message: string
    },
    gradeError: {
      state: boolean,
      message: string
    }
  };
  //
  invalidForm: boolean;
  classBtnSubmit: string;
  formSubmitted: boolean;
  //
  constructor() {
    this.invalidForm = true;
    this.formSubmitted = false;
    this.classBtnSubmit = 'btn btn-primary customBtn cursor-not-allowed';
    this.feedback = {
      name: '',
      grade: null,
      comments: ''
    };
    this.errorMessages = {
      nameError: {
        state: true,
        message: '* This field is required'
      },
      gradeError: {
        state: true,
        message: '* This field is required'
      }
    };
  }
  ngOnInit() {
  }
  checkForNameError(evt) {
    this.feedback.name = evt.target.value.trim();
    if (this.feedback.name === '') {
      this.errorMessages.nameError.state = true;
      this.errorMessages.nameError.message = '* Please enter your name !';
    } else {
      const regExpBadFormatName = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]/;
      const incorrectName = regExpBadFormatName.test(this.feedback.name);
      if (incorrectName) {
        this.errorMessages.nameError.state = true;
        this.errorMessages.nameError.message = '* Please enter a valid name !';
      } else {
        if (this.feedback.name.length < 3) {
          this.errorMessages.nameError.state = true;
          this.errorMessages.nameError.message = '* Please enter at least 3 characters !';
        } else {
          this.errorMessages.nameError.state = false;
          this.errorMessages.nameError.message = null;
        }
      }
    }
    this.enableBtnSubmit();
  }
  checkForGradeError(evt) {
    this.feedback.grade = evt.target.value;
    if (this.feedback.grade === null || this.feedback.grade.toString() === '') {
      this.errorMessages.gradeError.state = true;
      this.errorMessages.gradeError.message = '* Please enter a grade !';
    } else {
      if (! (this.feedback.grade >= 1 && this.feedback.grade <= 10 )) {
        this.errorMessages.gradeError.state = true;
        this.errorMessages.gradeError.message = '* Please enter a grade between 1 and 10 !';
      } else {
        this.errorMessages.gradeError.state = false;
        this.errorMessages.gradeError.message = null;
      }
    }
    this.enableBtnSubmit();
  }
  setComments(evt) {
    this.feedback.grade = evt.target.value.trim();
  }
  enableBtnSubmit() {
    this.invalidForm = !(this.feedback.name !== '' &&
                        this.feedback.grade !== null &&
                        this.feedback.grade.toString() !== '');
  }
  onSubmit(form) {
    form.preventDefault();
    this.formSubmitted = true;
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.feedback.name !== '' || this.feedback.comments !== '' || this.feedback.grade !== null) && !this.formSubmitted) {
      return confirm('Do you really want to discard changes made on this page ?');
    } else  {
      return true;
    }
  }
}
