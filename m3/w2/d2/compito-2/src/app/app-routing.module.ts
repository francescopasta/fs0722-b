import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostUnactiveComponent } from './components/post-unactive/post-unactive.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'actives',
    component: PostAttiviComponent
  },
  {
    path: 'unactives',
    component: PostUnactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
