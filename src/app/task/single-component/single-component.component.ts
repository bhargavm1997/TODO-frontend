import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';
import { ToastrService } from 'ngx-toastr';
import { HostListener} from '@angular/core';


@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {
a:any
b:any
taskHistory:any
userInfo:any
taskId:any

  constructor(private http:TodoServiceService, private route:ActivatedRoute,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.userInfo = this.http.getUserInfoFromLocalstorage()
this.a=this.route.snapshot.paramMap.get("taskId")
this.http.singleView(this.a).subscribe(
  data=>{
    this.b=data["data"]
  })
  this.http.taskHistory(this.a).subscribe(
    data=>{
      this.taskHistory=data["data"]
      this.taskId=data["data"][0].taskId
    })

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
     if (event.ctrlKey) {
         if (event.key === 'z') {
          this.undoTaskHistory(this.taskId)       
         }      
        }  
 }
  undoTaskHistory(taskId){
    this.http.undoTaskHistory(taskId).subscribe(
      data => {
        if (data["status"] == 200) {
          this.toaster.success("Undo successfully")
          setTimeout(() => {
            window.location.reload();   
          }, 2000);
    
        }
      })
  }
  
}
