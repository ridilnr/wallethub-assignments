import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faMarker,
  faAt,
  faUser,
  faFlag,
  faMapMarked,
  faUserGraduate,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FontAwesomeModule,
  ]
})

export class SharedModule {
  constructor() {
    library.add(
      faStar,
      farStar,
      faStar,
      faMarker,
      faAt,
      faUser,
      faFlag,
      faMapMarked,
      faUserGraduate,
      faDollarSign
    );
  }
}
