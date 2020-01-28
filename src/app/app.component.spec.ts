import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-wallethub-assignments'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-wallethub-assignments');
  });

  it('should navigate to home page', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    router.navigate(['']);
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should navigate to Read Me page', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    router.navigate(['/readme']);
    expect(navigateSpy).toHaveBeenCalledWith(['/readme']);
  });

  it('should navigate to Feedback page', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    router.navigate(['/feedback']);
    expect(navigateSpy).toHaveBeenCalledWith(['/feedback']);
  });
});
