import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    {
        path: 'view/:id',
        component: ViewComponent,
    },
    {
        path: 'edit/:id',
        component: EditComponent,
    },

    {
        path: 'create',
        component: CreateComponent,
    },
    {
        path: '**',
        component: HomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule],
})
export class AppRoutingModule { }
