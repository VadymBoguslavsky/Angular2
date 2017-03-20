import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {TaskListComponent} from "./task/task-list.component";
import {TaskShowComponent} from "./task/task-show.component";
import {TaskNewComponent} from "./task/task-new.component";
import {TaskService} from "./task/task.service";
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TaskListComponent,
    TaskShowComponent,
    TaskNewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,

  ],
  providers: [ Angular2TokenService,TaskService,AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
