import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  b: any
  a: any
  userInfo:any

  constructor(private http: TodoServiceService, private route: ActivatedRoute, private router: Router) { 
  }
  ngOnInit(): void {

    this.a = this.route.snapshot.paramMap.get("taskid")
    this.userInfo = this.http.getUserInfoFromLocalstorage()

    this.http.singleView(this.a).subscribe(
      data => {
        if(data["status"]==200)
        {
          this.b = data["data"]

        }
        else if(data["status"]==500)
        {
          this.router.navigate(["/error/500"])

        }
      })


  }


  editTask() {
    let edit = {
      _id: this.b._id,
      title: this.b.title,
      description: this.b.description,
      status:this.b.status,
      updatedBy:this.userInfo._id

    }

    this.http.update(edit).subscribe(data => {
      if (data["status"] == 200) {
        this.router.navigate(["/list"])
      }
    })

  }

  
}
