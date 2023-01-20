import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MoviesComponent } from '../../movies/movies.component';
import { UserComponent } from '../../user/user.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

//tutte le rotte interne al path del modulo che ha caricato questo
const routes: Routes = [
    // {
    //     path: 'movies',
    //     component: MoviesComponent,
    //     canActivate:[AuthGuard]
    // },
    // {
    //     path: 'profile',
    //     component:UserComponent,
    //     canActivate:[AuthGuard]
    // }
];

@NgModule({
  //usando forChild() e non forRoot() le rotte sono messe in coda al path homeRouting (definito nel app-module al momento del lazy loading)
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
