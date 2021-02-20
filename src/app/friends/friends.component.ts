import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  email: any
  friendList: any
  userInfo:any

  constructor(private http: TodoServiceService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.userInfo = this.http.getUserInfoFromLocalstorage()

    this.http.friendList(this.userInfo._id).subscribe(
      data => {
        this.friendList = data["data"]
      })


  }
  sendInvite() {
    this.http.userDetailsByEmail(this.email).subscribe(
      data => {
        if (data["status"] == 200) {
          let a = {
            id:data["data"][0]._id,
            email: this.email,
            invitedBy: this.userInfo._id
          }
          this.http.addFriend(a).subscribe(
            data => {
              if (data["status"] == 200) {
                this.toaster.success("Invitation sent")
                setTimeout(() => {
                  window.location.reload();         
                }, 2000);
          
              }
            })
        }
        else{
            this.toaster.warning("Friend not found in system")
            setTimeout(() => {
              window.location.reload();         
            }, 2000);
        }
      })
  
  }
}
