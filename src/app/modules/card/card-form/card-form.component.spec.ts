import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared.module';
import { CardFormComponent } from './card-form.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;
  let checkForFullNameErrorSpy;
  let checkForHomeAddressSpy;
  let checkForEmailErrorSpy;
  let checkForIncomeError;
  let onSubmitSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ CardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    checkForFullNameErrorSpy = spyOn(component, 'checkForFullNameError');
    checkForHomeAddressSpy = spyOn(component, 'checkForHomeAddressError');
    checkForEmailErrorSpy = spyOn(component, 'checkForEmailError');
    checkForIncomeError = spyOn(component, 'checkForIncomeError');
    onSubmitSpy = spyOn(component, 'onSubmit');
    fixture.detectChanges();
  });

  it('should create card-form component', () => {
    expect(component).toBeTruthy();
  });
  it('should called checkForFullNameError method on input event in the full name field', () => {
    const input = fixture.debugElement.query(By.css('#fullName')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForFullNameErrorSpy).toHaveBeenCalled();
  });

  it('should called checkForHomeAddressError method on input event in the home address field', () => {
    const input = fixture.debugElement.query(By.css('#homeAddress')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForHomeAddressSpy).toHaveBeenCalled();
  });

  it('should called checkForEmailError method on input event in the email field', () => {
    const input = fixture.debugElement.query(By.css('#email')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForEmailErrorSpy).toHaveBeenCalled();
  });

  it('should called checkForIncomeError method on input event in the income field', () => {
    const input = fixture.debugElement.query(By.css('#income')).nativeElement;
    input.dispatchEvent(new Event('input'));
    expect(checkForIncomeError).toHaveBeenCalled();
  });

  it('should called onSubmit method on submit event when the form is submitted', () => {
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
