import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  a=[]
  title: any
  description: any
  friends: any
  b: any
  status: any
  isShown: boolean = false ;
  subTask:any
  friendList:any
  friendArray=[]
  loggedIn:any

  constructor(private http: TodoServiceService,private toaster:ToastrService) {
  }

  ngOnInit(): void {
    this.b = this.http.getUserInfoFromLocalstorage()
    this.loggedIn=this.b._id;
    console.log(this.loggedIn)
    this.friendList = this.http.friendList(this.b._id).subscribe(
    friendList => {
      this.friends = friendList["data"]
      if(this.friends!=[]){
      for(var friend of this.friends){
        this.friendArray.push(friend.friendId)
       
      }
      this.http.getTodo(this.b._id,this.friendArray).subscribe(
        data => {
          for(var i=0;i< data["data"].length;i++)
          {
            if(data["data"][i].length!=0)
            {
              this.a.push(data["data"][i]);
            }
          }
        })
    }
    })
   
  }


  submit() {
    var a;
    if(this.subTask!=undefined)
    {
      a = {
        title: this.title,
        description: this.description,
        status: this.status,
        friends: this.friendArray,
        id: this.b._id,
        subtask:this.subTask
  
      }
    }
    else{
       a = {
        title: this.title,
        description: this.description,
        status: this.status,
        friends: this.friendArray,
        id: this.b._id
  
      }
    }
    this.http.addTodo(a).subscribe(
      data => {
        if (data["status"] == 200) {
         window.location.reload();
        }
      })
  }

  deleteTask(taskId){
    this.http.deleteTask(taskId,this.loggedIn).subscribe(
      data => {
        if (data["status"] == 200) {
          this.toaster.success("Task deleted successfully")
          setTimeout(() => {
            window.location.reload();   
          }, 2000);
    
        }
      })
  }


  addSubTask()
  {
    this.isShown = ! this.isShown;
  }


}
