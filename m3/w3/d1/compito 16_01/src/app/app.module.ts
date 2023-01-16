import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DebugInterceptor } from './debug.interceptor';
import { FavouritePhotosComponent } from './components/favourite-photos/favourite-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritePhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: DebugInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
