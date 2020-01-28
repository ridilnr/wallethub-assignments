import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../shared.module';
import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  const customer = { avatar: '', name: '', comment: '', rating: 4 };
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ CustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    component.customer = customer;
    fixture.detectChanges();
  });

  it('should create customer component', () => {
    expect(component).toBeTruthy();
  });
});
