import { routerAnimation } from './common/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation()],
})
export class AppComponent {
  title = 'angular-wallethub-assignments';
  // function used to get actual route and data (number) passed to it
  public getRouteAnimation(outlet: RouterOutlet) {
    const res = outlet.activatedRouteData.num === undefined ? -1 : outlet.activatedRouteData.num;

    return res;
  }
}
