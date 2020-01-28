import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CardDetailsComponent} from './card-details/card-details.component';
import {CardFormComponent} from './card-form/card-form.component';
import {CardInfoComponent} from './card-info/card-info.component';
import {CanDeactivateGuard} from '../../can-deactivate-guard.service';
// Declaration of nested routes
const cardRoutes: Routes = [
  {path: '', component: CardFormComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'info', component: CardInfoComponent},
  {path: 'details', component: CardDetailsComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(cardRoutes)],
  exports: [RouterModule],
})
export class CardRoutingModule {
}
