import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { UpdateComponent } from './user/update/update.component';
import{RouterModule} from '@angular/router'
import{HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms'

import { TodoServiceService } from './todo-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { ListComponent } from './task/list/list.component';
import { SingleComponentComponent } from './task/single-component/single-component.component';
import { EditComponent } from './task/edit/edit.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import{ToastrModule} from 'ngx-toastr';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { FriendsComponent } from './friends/friends.component';
import { Error404Component } from './error/error404/error404.component';
import { Error500Component } from './error/error500/error500.component'



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    UpdateComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    ListComponent,
    SingleComponentComponent,
    EditComponent,
    ForgotComponent,
    EditProfileComponent,
    FriendsComponent,
    Error404Component,
    Error500Component
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:"signup",component:SignupComponent},
      {path:"forgot",component:ForgotComponent},
      {path:"login",component:UserComponent},
      {path:"",component:UserComponent},
      {path:"*",component:UserComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"list",component:ListComponent},
      {path:"singleView/:taskId",component:SingleComponentComponent},
      {path:"edit/:taskid",component:EditComponent},
      {path:"updatepassword/:email",component:UpdateComponent},
      {path:"editProfile/:id",component:EditProfileComponent},
      {path:"friends",component:FriendsComponent},
      {path:"error/404",component:Error404Component},
      {path:"error/500",component:Error500Component},
      {
        path: "**",
        pathMatch   : 'full',
        component: Error404Component
     },

    ])

  ],
  providers: [
    TodoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
