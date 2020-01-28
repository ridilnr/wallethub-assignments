import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { CardInfoComponent } from './card-info.component';

describe('CardInfoComponent', () => {
  const cardData = {
    fullName: '',
    homeAddress: '',
    email: '',
    income: '0',
  };
  let component: CardInfoComponent;
  let fixture: ComponentFixture<CardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{
        path: '', component: CardInfoComponent
      }])],
      declarations: [ CardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    history.pushState({data: cardData}, '', '');
    fixture = TestBed.createComponent(CardInfoComponent);
    component = fixture.componentInstance;
    component.registeredCardData = history.state.data;
    fixture.detectChanges();
  });

  it('should create card-info component', () => {
    expect(component).toBeTruthy();
  });
});
