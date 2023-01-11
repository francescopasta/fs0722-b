import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InactiveComponent } from './inactive/inactive.component';
import { HomeComponent } from './home/home.component';
import { CardPostComponent } from './card-post/card-post.component';
import { ActiveComponent } from './active/active.component';

@NgModule({
  declarations: [
    AppComponent,
    InactiveComponent,
    HomeComponent,
    CardPostComponent,
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
