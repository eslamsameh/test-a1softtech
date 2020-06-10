import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing.module';
import { PageComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [HomeComponent, PageComponent, EditUserComponent, AddUserComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbPaginationModule,
    FormsModule
  ]
})
export class PagesModule { }
