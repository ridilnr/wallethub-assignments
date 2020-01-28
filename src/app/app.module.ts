import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {RequirementsComponent} from './read-me/requirements/requirements.component';
import {DownloadComponent} from './read-me/download/download.component';
import {ReadMeComponent} from './read-me/read-me.component';
import {SharedModule} from './modules/shared.module';
import { MessageComponent } from './feedback/message/message.component';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    RequirementsComponent,
    DownloadComponent,
    ReadMeComponent,
    MessageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
