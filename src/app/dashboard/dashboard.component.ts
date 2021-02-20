import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  a: any
  count: any
  friendCount:any

  constructor(private http: TodoServiceService) { }

  ngOnInit(): void {
    this.a = this.http.getUserInfoFromLocalstorage()
    this.http.count(this.a._id).subscribe(
      data => {
        this.count = data["data"];
        console.log(this.count)

      })
      this.http.friendCount(this.a._id).subscribe(
        data => {
          this.friendCount = data["data"];
          console.log(this.friendCount)
  
        })
  

  }

}
