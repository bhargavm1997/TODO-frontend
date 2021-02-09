import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
title:any
description:any
users:any
b:any
  constructor(private http:TodoServiceService,private route:Router) { }

  ngOnInit(): void { 
    this.b=this.http.getUserInfoFromLocalstorage()

  }
submit()
{
  let a={
    title:this.title,
    description:this.description,
    users:this.users,
    id:this.b._id
    
  }
  console.log(this.b)
  this.http.addTodo(a).subscribe(
    data=>{
      console.log(data["status"])
      if(data["status"]==200)
      {
        this.route.navigate(["/list"])
      }
    })
}
}
