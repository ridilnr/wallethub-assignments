import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../modules/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import { ReadMeComponent } from './read-me.component';
import {AuthService} from '../auth.service';
import {By} from '@angular/platform-browser';

describe('ReadMeComponent', () => {
  let component: ReadMeComponent;
  let fixture: ComponentFixture<ReadMeComponent>;
  let checkForEmailErrorSpy;
  let onSubmitSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ ReadMeComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMeComponent);
    component = fixture.componentInstance;
    checkForEmailErrorSpy = spyOn(component, 'checkForEmailError');
    onSubmitSpy = spyOn(component, 'onSubmit');
    fixture.detectChanges();
  });

  it('should create read-me component', () => {
    expect(component).toBeTruthy();
  });

  it('should called checkForEmailError method on input event in the email field', () => {
    const input = fixture.debugElement.query(By.css('#email')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForEmailErrorSpy).toHaveBeenCalled();
  });

  it('should called onSubmit method on submit event when the form is submitted', () => {
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
