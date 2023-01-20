import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
    {
        path: 'home',
        component:HomeComponent,
        children:[
            {
                path:'movies',
                component:MoviesComponent,
                canActivate:[AuthGuard]
            },
            {
                path:'user',
                component:UserComponent,
                canActivate:[AuthGuard]
            }
        ],
        canActivate: [AuthGuard],
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
    ,
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
