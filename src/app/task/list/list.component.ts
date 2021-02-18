import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  a: any
  title: any
  description: any
  users: any
  b: any
  status: any
  isShown: boolean = false ;
  subTask:any

  constructor(private http: TodoServiceService,private toaster:ToastrService) {
  }

  ngOnInit(): void {
    this.b = this.http.getUserInfoFromLocalstorage()

    this.http.getTodo().subscribe(
      data => {
        this.a = data["data"]
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
        users: this.users,
        id: this.b._id,
        subtask:this.subTask
  
      }
    }
    else{
       a = {
        title: this.title,
        description: this.description,
        status: this.status,
        users: this.users,
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
    this.http.deleteTask(taskId).subscribe(
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
