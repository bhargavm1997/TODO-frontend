import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { UpdateComponent } from './user/update/update.component';
import{RouterModule} from '@angular/router'
import{HttpClientModule} from '@angular/common/http'
import{FormsModule} from '@angular/forms'

import { TodoServiceService } from './todo-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddListComponent } from './task/add-list/add-list.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { ListComponent } from './task/list/list.component';
import { SingleComponentComponent } from './task/single-component/single-component.component';
import { EditComponent } from './task/edit/edit.component';
import { ForgotComponent } from './user/forgot/forgot.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    UpdateComponent,
    DashboardComponent,
    AddListComponent,
    HeaderComponent,
    NavigationComponent,
    ListComponent,
    SingleComponentComponent,
    EditComponent,
    ForgotComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:"signup",component:SignupComponent},
      {path:"forgot",component:ForgotComponent},
      {path:"login",component:UserComponent},
      {path:"",component:UserComponent},
      {path:"*",component:UserComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"add",component:AddListComponent},
      {path:"list",component:ListComponent},
      {path:"singleView/:taskId",component:SingleComponentComponent},
      {path:"edit/:taskid",component:EditComponent},
      {path:"updatepassword/:email",component:UpdateComponent}
    ])

  ],
  providers: [
    TodoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
