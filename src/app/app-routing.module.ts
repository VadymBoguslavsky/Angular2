import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TaskListComponent} from "./task/task-list.component";
import {TaskShowComponent} from "./task/task-show.component";
import {TaskNewComponent} from "./task/task-new.component";
import {ProfileComponent} from "./profile/profile.component";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {path: 'home', component: HomeComponent },
  {path: 'tasks', component: TaskListComponent},
  {path: 'task/new', component: TaskNewComponent},
  {path: 'tasks/:id', component: TaskShowComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
