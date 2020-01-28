import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../modules/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import { FeedbackComponent } from './feedback.component';
import {By} from '@angular/platform-browser';
import {MessageComponent} from './message/message.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let checkForNameErrorSpy;
  let checkForGradeErrorSpy;
  let setCommentsSpy;
  let onSubmitSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ FeedbackComponent, MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    checkForNameErrorSpy = spyOn(component, 'checkForNameError');
    checkForGradeErrorSpy = spyOn(component, 'checkForGradeError');
    setCommentsSpy = spyOn(component, 'setComments');
    onSubmitSpy = spyOn(component, 'onSubmit');
    fixture.detectChanges();
  });

  it('should create feedback component', () => {
    expect(component).toBeTruthy();
  });

  it('should called checkForNameError method on input event in the name field', () => {
    const input = fixture.debugElement.query(By.css('#name')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForNameErrorSpy).toHaveBeenCalled();
  });

  it('should called checkForGradeError method on input event in the grade field', () => {
    const input = fixture.debugElement.query(By.css('#grade')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForGradeErrorSpy).toHaveBeenCalled();
  });

  it('should called setCommentsSpy method on input event in the comments field', () => {
    const input = fixture.debugElement.query(By.css('#comments')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(setCommentsSpy).toHaveBeenCalled();
  });

  it('should called onSubmit method on submit event when the form is submitted', () => {
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
