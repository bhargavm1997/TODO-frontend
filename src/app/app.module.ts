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
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:"signup",component:SignupComponent},
      {path:"update",component:UpdateComponent},
      {path:"login",component:UserComponent},
      {path:"",component:UserComponent},
      {path:"*",component:UserComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"add",component:AddListComponent},
      {path:"list",component:ListComponent},
      {path:"singleView/:taskId",component:SingleComponentComponent}
    ])

  ],
  providers: [
    TodoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
