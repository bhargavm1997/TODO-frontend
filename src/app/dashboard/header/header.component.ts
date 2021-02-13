import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
a:any
  constructor(private http:TodoServiceService) { }

  ngOnInit(): void {

    this.a=this.http.getUserInfoFromLocalstorage()
    console.log(this.a)

  }

}
