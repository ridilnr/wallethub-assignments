import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  // The following event will be emit to the parent when use has submitted  his comment
  // so that the new comment will be displayed in the parent component (card-details)
  @Output() commentAdded = new EventEmitter<{ userName: string, userComment: string, userRating: number }>();
  // Declare object model for user comments
  newComment: {
    name: string,
    rating: number
    comments: string,
  };
  // Declare object model for any error that may happens when user fill the form
  errorMessages: {
    nameError: {
      state: boolean,
      message: string
    },
    ratingError: {
      state: boolean,
      message: string
    },
    commentsError: {
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
    this.newComment = {
      name: '',
      rating: null,
      comments: ''
    };
    this.invalidForm = true;
    this.formSubmitted = false;
    this.classBtnSubmit = 'btn btn-primary mt-2 customBtn cursor-not-allowed';
    this.errorMessages = {
      nameError: {
        state: true,
        message: '* This field is required'
      },
      ratingError: {
        state: true,
        message: '* This field is required'
      },
      commentsError: {
        state: true,
        message: '* This field is required'
      }
    };
  }

  ngOnInit() {
  }
  // This function checks if user entered his name and entered a non valid name
  checkForNameError(evt) {
    this.newComment.name = evt.target.value.trim();
    if (this.newComment.name === '') {
      this.errorMessages.nameError.state = true;
      this.errorMessages.nameError.message = '* Please enter your name !';
    } else {
      const regExpBadFormatName = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]/;
      const incorrectName = regExpBadFormatName.test(this.newComment.name);
      if (incorrectName) {
        this.errorMessages.nameError.state = true;
        this.errorMessages.nameError.message = '* Please enter a valid name !';
      } else {
        if (this.newComment.name.length < 3) {
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
  // This function checks if user entered a correct rating which should be between 1 and 5
  checkForRatingError(evt) {
    this.newComment.rating = evt.target.value;
    if (this.newComment.rating === null || this.newComment.rating.toString() === '') {
      this.errorMessages.ratingError.state = true;
      this.errorMessages.ratingError.message = '* Please enter a rating !';
    } else {
      if (! (this.newComment.rating >= 1 && this.newComment.rating <= 5 )) {
        this.errorMessages.ratingError.state = true;
        this.errorMessages.ratingError.message = '* Please enter a rating between 1 and 5 !';
      } else {
        this.errorMessages.ratingError.state = false;
        this.errorMessages.ratingError.message = null;
      }
    }
    this.enableBtnSubmit();
  }
  // This function checks if user entered his comments
  checkForCommentsError(evt) {
    this.newComment.comments = evt.target.value.trim();
    if (this.newComment.comments === '') {
      this.errorMessages.commentsError.state = true;
      this.errorMessages.commentsError.message = '* Please let us know your comments !';
    } else {
      if (this.newComment.comments.match('.*[a-z].*')) {
        this.errorMessages.commentsError.state = false;
        this.errorMessages.commentsError.message = null;
      } else {
        this.errorMessages.commentsError.state = true;
        this.errorMessages.commentsError.message = '* Please enter a valid comment !';
      }
    }
    this.enableBtnSubmit();
  }
  // This function checks if all fields received proper data
  enableBtnSubmit() {
    this.invalidForm = !(this.newComment.name !== '' && this.newComment.rating !== null &&
                        this.newComment.rating.toString() !== '' && this.newComment.comments !== '');
  }
  // This function is executed once the form becomes valid and is submitted
  onSubmit(form) {
    form.preventDefault();
    this.formSubmitted = true;
    this.onAddComment();
  }
  // This function sends the comment object with his keys and values to the parent component
  onAddComment() {
   this.commentAdded.emit({
     userName: this.newComment.name,
     userComment: this.newComment.comments,
     userRating: this.newComment.rating});
  }
}
