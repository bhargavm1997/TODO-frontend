import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {  PushNotificationsServiceService  } from '../../push-notifications-service.service';  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
a:any
  constructor(private http:TodoServiceService, private route:Router,private toaster:ToastrService,private _notificationService: PushNotificationsServiceService) {
    this._notificationService.requestPermission();  

   }

  ngOnInit(): void {

    this.a=this.http.getUserInfoFromLocalstorage()
    this.notify(this.a._id)
  }

  logout()
  {
    this.http.deleteUserInfoFromLocalstorage()
    this.toaster.success("Logged out successfully")
    setTimeout(() => {     
    this.route.navigate(["/login"])

    }, 2000);
  }
  notify(id) {  
    let dataArray: Array < any >= [];  
    this.http.getNotification(id).subscribe(
      data => {
        for(var i=0;i<data["data"].length;i++)
        {
         var action=data["data"][i].action;

          this.http.userDetailsById(data["data"][i].updatedBy).subscribe(data1=>{
            if(data1["status"]==200)
            {
              dataArray.push({  
                'title':action,  
                'alertContent': action+" "+data1["data"][0].firstName+" "+data1["data"][0].lastName
            })
            this._notificationService.generateNotification(dataArray)

            }
          })
         
         
        }
      });
  }
}
