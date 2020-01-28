import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCommentComponent } from './new-comment.component';
import {SharedModule} from '../../../shared.module';
import {By} from '@angular/platform-browser';

describe('NewCommentComponent', () => {
  let component: NewCommentComponent;
  let fixture: ComponentFixture<NewCommentComponent>;
  let checkForNameErrorSpy;
  let checkForRatingErrorSpy;
  let checkForCommentsErrorSpy;
  let onSubmitSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ NewCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommentComponent);
    component = fixture.componentInstance;
    checkForNameErrorSpy = spyOn(component, 'checkForNameError');
    checkForRatingErrorSpy = spyOn(component, 'checkForRatingError');
    checkForCommentsErrorSpy = spyOn(component, 'checkForCommentsError');
    onSubmitSpy = spyOn(component, 'onSubmit');
    fixture.detectChanges();
  });

  it('should create new-comment component', () => {
    expect(component).toBeTruthy();
  });

  it('should called checkForNameError method on input event in the name field', () => {
    const input = fixture.debugElement.query(By.css('#name')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForNameErrorSpy).toHaveBeenCalled();
  });

  it('should called checkForRatingError method on input event in the rating field', () => {
    const input = fixture.debugElement.query(By.css('#rating')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForRatingErrorSpy).toHaveBeenCalled();
  });

  it('should called checkForCommentsError method on input event in the comments field', () => {
    const input = fixture.debugElement.query(By.css('#comments')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForCommentsErrorSpy).toHaveBeenCalled();
  });

  it('should called onSubmit method on submit event when the form is submitted', () => {
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
