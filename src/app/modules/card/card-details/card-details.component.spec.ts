import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from './card-details.component';
import { CustomerComponent } from './customer/customer.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import {SharedModule} from '../../shared.module';
import {Location} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      providers: [Location],
      declarations: [ CardDetailsComponent, CustomerComponent, NewCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create card-details component', () => {
    expect(component).toBeTruthy();
  });
});
