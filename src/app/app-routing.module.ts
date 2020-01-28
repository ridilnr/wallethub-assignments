import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReadMeComponent} from './read-me/read-me.component';
import {RequirementsComponent} from './read-me/requirements/requirements.component';
import {DownloadComponent} from './read-me/download/download.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
// Define routes of components
const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {num: 1}},
  {
    path: 'readme', canActivateChild: [AuthGuard], component: ReadMeComponent, data: {num: 2}, children: [
      {path: 'requirements', component: RequirementsComponent},
      {path: 'download', component: DownloadComponent}
    ]
  },
  {path: 'card', loadChildren: './modules/card/card.module#CardModule'},
  {path: 'feedback', component: FeedbackComponent, data: {num: 3}, canDeactivate: [CanDeactivateGuard]},
  {path: 'page404', component: PageNotFoundComponent, data: {num: 4, message: 'Sorry, we can\'t find the page you are searching !'}},
  {path: '**', redirectTo: '/page404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
