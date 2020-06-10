
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './pages.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
    {
        path: '', component: PageComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'add-user', component: AddUserComponent },
            { path: 'edit-user/:id', component: EditUserComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
