import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  a:any

  constructor(private http:TodoServiceService){}

  ngOnInit(): void {

this.http.getTodo().subscribe(
  data=>{
    this.a=data["data"]
  })


  }

}
