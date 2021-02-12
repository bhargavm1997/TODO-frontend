import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  b:any
  constructor(private http:TodoServiceService, private route:ActivatedRoute) { }
a:any
  ngOnInit(): void {

this.a=this.route.snapshot.paramMap.get("taskid")
console.log(this.a)
this.http.singleView(this.a).subscribe(
  data=>{
    this.b=data["data"]
  })


  }


  submit()
  {

let edit={
  _id:this.b._id,
  title:this.b.title,
  description:this.b.description
}

this.http.update(edit).subscribe(data=>{
console.log(data["data"])

})


  }
}
