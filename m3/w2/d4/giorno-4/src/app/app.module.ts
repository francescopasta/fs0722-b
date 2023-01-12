import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InactiveComponent } from './inactive/inactive.component';
import { HomeComponent } from './home/home.component';
import { CardPostComponent } from './card-post/card-post.component';
import { ActiveComponent } from './active/active.component';
import { MaiuscPipe } from './pipes/maiusc.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InactiveComponent,
    HomeComponent,
    CardPostComponent,
    ActiveComponent,
    MaiuscPipe,
    HighlightDirective,
    UsersPageComponent,
    UsersDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
