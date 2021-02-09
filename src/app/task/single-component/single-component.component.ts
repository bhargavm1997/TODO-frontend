import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {
a:any
b:any
  constructor(private http:TodoServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {

this.a=this.route.snapshot.paramMap.get("taskId")
console.log(this.a)
this.http.singleView(this.a).subscribe(
  data=>{
    this.b=data["data"]
  })



  }





}
