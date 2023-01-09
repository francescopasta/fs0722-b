import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteunoComponent } from './components/componenteuno/componenteuno.component';
import { ComponentedueComponent } from './components/componentedue/componentedue.component';
import { ComponentetreComponent } from './components/componentetre/componentetre.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteunoComponent,
    ComponentedueComponent,
    ComponentetreComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
