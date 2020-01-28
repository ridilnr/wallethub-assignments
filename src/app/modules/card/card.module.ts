import { NgModule } from '@angular/core';
import {CardDetailsComponent} from './card-details/card-details.component';
import {CardFormComponent} from './card-form/card-form.component';
import {CardInfoComponent} from './card-info/card-info.component';
import {CardRoutingModule} from './card-routing.module';
import {CustomerComponent} from './card-details/customer/customer.component';
import {NewCommentComponent} from './card-details/new-comment/new-comment.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [CardDetailsComponent, CardFormComponent, CardInfoComponent, CustomerComponent, NewCommentComponent],
  imports: [SharedModule, CommonModule, CardRoutingModule],
  exports: [],
})

export class CardModule {}
